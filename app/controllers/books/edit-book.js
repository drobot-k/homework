import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service ('data'),
    actions: {
        async saveBook(book) {
            await this.get("dataService").updateBook({
                title: book.title,
                author: book.author,
                pages: book.pages,
                description: book.description,
                tags: book.tags,
                // нужно передать тут id! ->
                id: book.id,
            });
            this.transitionToRoute('books.index');
        }
    }
});