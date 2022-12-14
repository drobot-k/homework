import Component from '@ember/component';
import fetch from 'fetch';

import ENV from 'homework/config/environment';

export default Component.extend({
    iAmRobot: true,
    reset: false,

  actions: {
    async saveUser(e) {
      e.preventDefault();

      this.get('onSubmit')({
        email: this.email,
        password: this.password,
        username: this.email,
      });
    },

    async verified(key) {
      try {
        const { success } = await (await fetch(`${ENV.backendURL}/recaptcha?key=${key}`)).json();

        this.set('iAmRobot', !success);
      } catch (error) {
        this.set('reset', true);
      }
    },

    expired() {
      this.set('iAmRobot', true);
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      email: this.get('user.email'),
      password: this.get('user.password'),
      username: this.get('user.username'),
    });
  }
});
