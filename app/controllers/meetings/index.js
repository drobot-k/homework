import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export const PER_PAGE = 2;

export default Controller.extend({
    store: service(),
    queryParams: ['search', 'page', 'speaker', 'book', 'date'],
    search: '',
    page: 1,
    speaker: '',
    book: '',
    date: '',

    pages: computed('model.meetings.meta.total', function() {
        const total = Number(this.get('model.meetings.meta.total'));
            if (Number.isNaN(total) || total <= 0) {
                return [];
            }
    
        return new Array(Math.ceil(total / PER_PAGE))
            .fill()
            .map((value, index) => index + 1);
    }),
    
    selectedSpeaker: computed('speaker', function() {
        const speaker = this.get('speaker');
    
        return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
    }),

    selectedBook: computed('book', function() {
        const book = this.get('book');
    
        return book ? this.get('model.books').findBy('id', book) : null;
    }),

    // selectedMeeting: computed('meeting', function() {
    //     const meeting = this.get('meeting');
    
    //     return meeting ? this.get('model.meetings').findBy('id', meeting) : null;
    // }),
    
    actions: {
        changeSpeaker(speaker) {
            this.set('speaker', speaker ? speaker.get('id') : '');
        },

        changeBook(book) {
            this.set('book', book ? book.get('id') : '');
        },

        // changeMeeting(meeting) {
        //     this.set('meeting', meeting ? meeting.get('id') : '');
        // },

        async deleteMeeting(meeting) {          
            await meeting.destroyRecord();
            this.get('store').unloadRecord(meeting);
        },

        onChangeDate(date) {
            this.set('date', date);
        },

        searchBook(query) {
            return this.get('store').query('book', { q: query })
        },
  
        searchSpeaker(query) {
            return this.get('store').query('speaker', { q: query })
        },

        clearFilter() {
            this.set('book', '');
            this.set('speaker', '');
            this.set('date', '');
            this.set('page', 1);
        },

        filter(s) {
            s.preventDefault(); 

            this.get('store').get('speaker', 'date', 'book');
            this.send('refreshModel');
        },
    },

});
