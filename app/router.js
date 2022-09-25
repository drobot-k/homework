import EmberRouter from '@ember/routing/router';
import config from 'homework/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', function() {
    this.route('edit-book', { path: '/:id'});
    this.route('create-book');
  });
  this.route('speakers', function() {
    this.route('edit-speaker', { path: '/:id'});
    this.route('create-speaker');
  });
  this.route('404', { path: '*path'});
  this.route('error', { path: '/:error'});
});

export default Router;
