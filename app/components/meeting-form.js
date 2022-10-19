import Component from '@ember/component';

export default Component.extend({
  savedMeeting: false,
    actions: {
        submitForm(e) {
          e.preventDefault();
    
          this.onsubmit({
            id: this.get('idMeeting'),
            date: this.get('date'),
          });
        }
      },
    
      didReceiveAttrs() {
        this._super(...arguments);
        // this.set('firstName', this.get('author.firstName'));
        // this.set('lastName', this.get('author.lastName'));
    
        this.setProperties({
          idMeeting: this.get('meeting.id') ? this.get('meeting.id') : undefined,
          date: this.get('meeting.date'),
        });
      },
});
