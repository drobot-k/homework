/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveUser(user) {
          let newUser;
          try {
            newUser = this.get('store').createRecord('user', user);
            console.log('сюда:', newUser);
            await newUser.save();
    
            this.transitionToRoute('index');
          }
          catch(e) {
            e.user = newUser;
            this.send('error', e);
          }
        },
    
        error(error, transition) {
          this.set('errors', error.user.errors);
          return false;
        }
      },
    
      resetErrors() {
        this.set('errors', {});
      }
});
