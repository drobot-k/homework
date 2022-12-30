import Controller from "@ember/controller";
import { inject as service } from '@ember/service';
import { set, get, computed } from '@ember/object'
import ENV from 'homework/config/environment';

export default Controller.extend({
  session: service(),
  currentUser: service(),
  i18n: service(),

  locale: ENV.i18n.defaultLocale,
  langRu: computed('locale', function() {
    return get(this, 'locale') === 'ru';
  }),
  langEn: computed('locale', function() {
    return get(this, 'locale') === 'en';
  }),

  actions: {
    async logout(e) {
      e.preventDefault();

      this.get('session').invalidate();
    },

    changeLang (lang) {
      set(this, 'locale', lang.target.value);
      set(this, 'i18n.locale', get(this, 'locale'));
    }
  },

  // init() {
  //   this._super(...arguments);
  //   set(this, 'i18n.locale', 'en');
  // }
});