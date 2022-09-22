import Component from '@ember/component';

export default Component.extend({
    actions: {
        deleteBook(idBook) {
            this.get('deleteBook')(idBook);
        }
    }

});
