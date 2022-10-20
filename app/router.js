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
  
  this.route('meetings', function() {
    this.route('create-meeting');
    this.route('edit-meeting', { path: '/edit-meeting/:id'});
    this.route('edit-report', { path: '/edit-report/:id'});
    this.route('create-report');
  });
});

export default Router;
