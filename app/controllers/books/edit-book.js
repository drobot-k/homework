import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service ('data'),
    actions: {
        async saveBook(book, uploadData) {
            let bookModel = this.get('model');
            bookModel.set('title', book.title);
            bookModel.set('author', book.author);
            bookModel.set('pages', book.pages);
            bookModel.set('description', book.description);
            bookModel.set('tags', book.tags);

            if (uploadData) {
                let fileName = await this.get('dataService').saveCover(bookModel, uploadData);
                bookModel.set('coverURL', fileName);
            }

            else {
                bookModel.set('coverURL', bookModel.coverURL);
            }

            await bookModel.save();

            this.transitionToRoute('books.index');
        }
    }
});