/* eslint-disable no-console */
import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm(e) {
          e.preventDefault();
    
          this.onsubmit({
            date: this.get('date'),
          });
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
