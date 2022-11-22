/* eslint-disable no-console */
import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.set('book', EmberObject.create());
        this.get('book').set('title', '');
        this.get('book').set('author', '');
        this.get('book').set('pages', '');
        this.get('book').set('description', '');
        this.get('book').set('coverURL', '');
        this.get('book').set('tags', []);
    },
    dataService: service ('data'),
    actions: {
        async saveBook(book, uploadData) {
            let newBook = this.get('store').createRecord('book', book);
            const fileName = await this.get("dataService").saveCover(newBook, uploadData);
            newBook.set("coverURL", fileName);
            await newBook.save();

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

        createcoverURL(coverURL) {
            this.set('coverURL', coverURL);
        },
    },

});
