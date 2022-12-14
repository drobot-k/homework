/* eslint-disable no-unused-vars */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import { get, set, computed } from '@ember/object';
// import { Promise } from 'rsvp';
import { later } from '@ember/runloop'
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend( {
    dataService: service ('data'),
    queryParams: {
        searchP: true,
        searchT: true
    },
    
    // model() {
    //     //обращаемся к сервису store к методу findAll к модели book (название должно совпадать со сгенерированной моделью)
    //     return this.get('store').findAll('book');
    // },

    model({searchP, searchT}) {
        return new Promise ((resolve, reject) => {
            later(async () => {
                try {
                    // eslint-disable-next-line no-constant-condition
                    let books = await this.get("dataService").getBooks(searchP, searchT);  
                    resolve(books);
                }
                catch (e) {
                    this.set('error', true);
                    const errorLogger = get (this, 'errorLogger');
                    errorLogger.logError('Connection failed');
                }  
            }, 1000);
        });
    },

    actions: {
        refreshBooks() {
            this.refresh();
        },
    },
});