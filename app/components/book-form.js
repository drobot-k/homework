import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm(e) {
            e.preventDefault();

            // this.onsubmit(this.get('book')); нужно передавать не объект book, а вручную созданный объект из копии данных
            this.onsubmit({
                id: this.get('idBook'),
                title: this.get('title'),
                author: this.get('author'),
                pages: this.get('pages'),
                description: this.get('description'),
                tags: this.get('tags')
            });
        },
    },

    //создаем копию данных в компоненте
    didReceiveAttrs() {
        this._super(...arguments);
        // this.set('title', this.get('book.title'));
        // this.set('author', this.get('book.author'));
        // this.set('pages', this.get('book.pages'));
        // this.set('description', this.get('book.description'));
        // this.set('tags', this.get('book.tags'));

        //или так
        this.setProperties({
            idBook: this.get('book.id') ? this.get('book.id') : undefined,
            title: this.get('book.title'),
            author: this.get('book.author'),
            pages: this.get('book.pages'),
            description: this.get('book.description'),
            tags: this.get('book.tags')
        });
    },
});
