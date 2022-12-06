import { computed } from '@ember/object';
import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
// import { Promise } from 'rsvp';

export default Ability.extend({
  currentUser: service(),
  session: service(),

  // only the person who wrote a post can edit it
  canEdit: computed(function () {

    if (!this.get('session.isAuthenticated')) {
      return false;
    }
    
    if (this.get('currentUser.user.admin')) {
      return true;
    }
    return false;

  }).volatile()
});