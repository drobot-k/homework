import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
    dataService: service ('data'),
    actions: {
        async saveBook(e) {
            e.preventDefault();

            await this.get("dataService").createBook({
                title: this.get('title'),
                author: this.get('authorName'),
                pages: this.get('numberOfPages'),
                description: this.get('linkDescription'),
                tags: this.get('tags'),
            });

            this.transitionToRoute('books.index');
        },

        createTitle(title) {
            this.set('title', title);
        },

        createAuthorName(authorName) {
            this.set('authorName', authorName);
        },

        createNumberOfPages(numberOfPages) {
            this.set('numberOfPages', numberOfPages);
        },

        createLinkDescription(linkDescription) {
            this.set('linkDescription', linkDescription);
        },

        createTags(tags) {
            this.set('tags', tags);
        },
    },

});
