/* eslint-disable no-unused-vars */
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set, computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  bookRating: [
    validator('ds-error'),
    validator('presence', true),
    // validator('number'),
  ],
  presentationURL: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', { type: 'url' })
  ],
  videoURL: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', { type: 'url' })
  ],
  book: [
    validator('ds-error'),
    validator('presence', true),
  ],
  speaker: [
    validator('ds-error'),
    validator('presence', true),
  ],
  review: [
    validator('ds-error'),
    validator('presence', true),
  ],
});

export default Component.extend(Validations, {
  isFormValid: computed.alias('validations.isValid'),
  error: false,
  store: service(),

    actions: {
        submitForm(e) {
          e.preventDefault();

          if (this.get('isFormValid')) {
            this.set('error', false)
    
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
          }

          else {
            this.set('error', true)
          }
        },

        searchBook(query) {
          return this.get('store').query('book', { q: query })
        },

        searchSpeaker(query) {
          return this.get('store').query('speaker', { q: query })
        },

        clear(report) {          
          report.destroyRecord();
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
