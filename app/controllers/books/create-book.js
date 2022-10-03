/* eslint-disable no-console */
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
// import { get, set } from '@ember/object';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.set('book', EmberObject.create());
        this.get('book').set('title', '');
        this.get('book').set('author', '');
        this.get('book').set('pages', '');
        this.get('book').set('description', '');
        this.get('book').set('tags', []);
        this.get('book').set('cover', '');
    },

    dataService: service ('data'),
    actions: {
        async saveBook(book) {
            // e.preventDefault();

            await this.get("dataService").createBook({
                title: book.title,
                author: book.author,
                pages: book.pages,
                description: book.description,
                tags: book.tags,
            });
            console.log ('сюда', book)
            this.transitionToRoute('books.index');
        },

        createTitle(title) {
            this.set('title', title);
        },

        createAuthorName(author) {
            this.set('author', author);
        },

        createNumberOfPages(pages) {
            this.set('pages', pages);
        },

        createLinkDescription(description) {
            this.set('description', description);
        },

        createTags(tags) {
            this.set('tags', tags);
        },
    },

});
