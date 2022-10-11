import Controller from '@ember/controller';
import { inject as service } from '@ember/service'


export default Controller.extend({
    dataService: service ('data'),
    queryParams: ["searchP", "searchT"],
    //дефолтное значение
    searchP: '',
    searchT: '',

    actions: {
        async deleteBook(book) {          
            await book.destroyRecord();
        },

        search(s) {
            //preventDefault нужен для того, чтобы пользователь остался на текущей странице
            s.preventDefault(); 
            this.get('dataService').getBooks(this.get('searchP', 'searchT'));
            this.send('refreshBooks');
        },
    },
});
