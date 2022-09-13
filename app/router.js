import EmberRouter from '@ember/routing/router';
import config from 'homework/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books');
  this.route('speakers');
});

export default Router;
