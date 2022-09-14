import EmberRouter from '@ember/routing/router';
import config from 'homework/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', { path: '/books'}, function() {
    this.route('edit-book', { path: '/:id'});
  });
  this.route('speakers', { path: '/speakers'}, function() {
    this.route('edit-speaker', { path: '/:id'});
  });
  this.route('404', { path: '*path'});
});

export default Router;
