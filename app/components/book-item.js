import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
    dataService: service ('data'),
    actions: {
        // async 
        deleteBook(id) {
            // await 
            this.get('dataService').deleteBook(id);
            // this.transitionToRoute('books.index');
        }
    }
});
