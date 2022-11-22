import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
// import { Promise } from 'rsvp';
import { later } from '@ember/runloop'

export default Route.extend({
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
                    let books = {searchP, searchT} ? await this.get("dataService").getBooks(searchP, searchT) : await this.get('store').findAll('book');  
                    resolve(books);
                }
                catch (e) {
                    reject('Connection failed');
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