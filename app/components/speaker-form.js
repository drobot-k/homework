/* eslint-disable no-unused-vars */
import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    surname: [
        validator('ds-error'),
        validator('presence', true),
        validator('length', {
            min: 2,
            max: 40
        }),
    ],
    name: [
        validator('ds-error'),
        validator('presence', true),
        validator('length', {
            min: 2,
            max: 40
        }),
    ],
    fName: [
        validator('ds-error'),
        validator('presence', true),
        validator('length', {
            min: 2,
            max: 40
        }),
    ],
  });

export default Component.extend(Validations,{
    isFormValid: computed.alias('validations.isValid'),
    error: false,

    actions: {
        submitForm(e) {
            e.preventDefault();
            if (this.get('isFormValid')) {
                this.set('error', false) 

                this.onsubmit({
                    id: this.get('idSpeaker'),
                    surname: this.get('surname'),
                    name: this.get('name'),
                    fName: this.get('fName'),
                });
            }

            else {
                this.set('error', true);
                const errorLogger = get (this, 'errorLogger');
                errorLogger.logError('Invalid form');
            }
        },
    },

    didReceiveAttrs() {
        this._super(...arguments);
        this.setProperties({
            idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
            surname: this.get('speaker.surname'),
            name: this.get('speaker.name'),
            fName: this.get('speaker.fName'),
        });
    },
});
