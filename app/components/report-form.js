import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
    actions: {
        submitForm(e) {
          e.preventDefault();
    
          this.onsubmit({
            reportDate: this.get('date'),
            // meetingId: this.get('meetingId'),
            book: this.get('book'),
            speaker: this.get('speaker'),
            bookRating: this.get('bookRating'),
            presentationURL: this.get('presentationURL'),
            videoURL: this.get('videoURL'),
            review: this.get('review'),
          });
        },

        searchBook(query) {
          return this.get('store').query('book', { q: query })
        },

        searchSpeaker(query) {
          return this.get('store').query('speaker', { q: query })
        },

        async clear(report) {          
          await report.destroyRecord();
          this.get('store').unloadRecord(report);
      },
      },
    
      didReceiveAttrs() {
        this._super(...arguments);
    
        this.setProperties({
          date: this.get('meetingDate'),
          // meetingId: this.get('meetingId'),
          book: this.get('book'),
          speaker: this.get('speaker'),
          bookRating: this.get('bookRating'),
          presentationURL: this.get('presentationURL'),
          videoURL: this.get('videoURL'),
          review: this.get('review'),

        });
      },
});
