import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
    dataService: service ('data'),
    actions: {
        async deleteBook(id) {
            try {
                await this.get('dataService').deleteBook(id);
                // this.transitionToRoute('books.index');
                // eslint-disable-next-line ember/closure-actions
                this.send('refreshBooks');
            }
            catch (e) {
                this.send('error', new Error ('Connection failed'));
            }
        }
    }
});
