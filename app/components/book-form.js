import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
    actions: {
        submitForm(e) {
            e.preventDefault();

            // this.onsubmit(this.get('book')); нужно передавать не объект book, а вручную созданный объект из копии данных
            // set(this, 'isUploadingFile', true);
            const uploadData = get(this, 'uploadData');
            this.onsubmit({
                id: this.get('idBook'),
                title: this.get('title'),
                author: this.get('author'),
                pages: this.get('pages'),
                description: this.get('description'),
                tags: this.get('tags'),
            }, uploadData);
            // set(this, 'isUploadingFile', false);
        },

        changeTags(newTags) {
            set(this, 'tags', [...newTags]);
      
            // eslint-disable-next-line no-console
            console.log(get(this, 'tags'));
        },
    
        changeUploadData(uploadData) {
            set(this, 'uploadData', uploadData);
        },
    
        change() {
            set(this, 'tags', ['1', '2', '3']);
        }
    },

    reset() {
        set(this, 'isUploadingFile', false);
        set(this, 'title', '');
        set(this, 'author', '');
        set(this, 'pages', '');
        set(this, 'description', '');
        set(this, 'tags', []);
        set(this, 'uploadData', null);
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
            tags: this.get('book.tags'),
            coverURL: this.get('book.coverURL'),
        });
    },
});
