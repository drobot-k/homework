/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  validDate: [
      validator('ds-error'),
  ],
});

export default Component.extend(Validations, {
    isFormValid: computed.alias('validations.isValid'),
    error: false,

    actions: {
        submitForm(e) {
          e.preventDefault();

          if (this.get('isFormValid')) {
            this.set('error', false) 
    
            this.onsubmit({
              date: this.get('date'),
            });
          }

          else {
            this.set('error', true);
            const errorLogger = get (this, 'errorLogger');
            errorLogger.logError('Invalid form');
        }
        },


        onChangeDate(date) {
          this.set('date', date);
        },
      },
    
      didReceiveAttrs() {
        this._super(...arguments);
        // this.set('firstName', this.get('author.firstName'));
        // this.set('lastName', this.get('author.lastName'));
    
        this.setProperties({
          date: this.get('meetingDate'),
        });
      },
});
