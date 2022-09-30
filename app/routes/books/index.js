import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import { Promise } from 'rsvp';
import { later } from '@ember/runloop'

export default Route.extend({
    dataService: service ('data'),
    queryParams: {
        searchP: true,
        searchT: true
    },

    model({searchP, searchT}) {
        return new Promise ((resolve, reject) => {
            later(async () => {
                try {
                    // eslint-disable-next-line no-constant-condition
                    let books = {searchP, searchT} ? await this.get("dataService").getBooks(searchP, searchT) : await this.get("dataService").getBooks();  
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
        
        // loading(transition, originRoute) {
        //     loading() {
        //     return false;
        // }
    }
});