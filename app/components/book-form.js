/* eslint-disable no-unused-vars */
import Component from '@ember/component';
import { get, set, computed } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';
import { translationMacro as t } from "ember-i18n";
import { inject as service } from '@ember/service';

const Validations = buildValidations({
    title: [
        validator('ds-error'),
        // validator('presence', {
        //     presence: true,
        //     message: computed('model.{i18n.locale}', function () {
        //       return '{description} ' + get(this, 'model.i18n').t('errors.blank');
        //     }),
        // }),
        validator('presence', true),
        validator('length', {
            min: 2,
            max: 40
        }),
    ],
    author: [
        validator('ds-error'),
        validator('presence', true),
        validator('length', {
            min: 2,
            max: 40
        }),
    ],
    pages: [
        validator('ds-error'),
        validator('presence', true),
        // validator('number'),
    ],
    description: [
        validator('ds-error'),
        validator('presence', true),
        validator('format', { type: 'url' })
    ],
    // coverURL: [
    //     validator('ds-error'),
    //     validator('presence', true),
    // ],
    tags: [
        validator('ds-error'),
        validator('presence', true),
    ],
  });

export default Component.extend(Validations, {
    i18n: service(),
    isFormValid: computed.alias('validations.isValid'),
    error: false,

    actions: {
        submitForm(e) {
            
            e.preventDefault();
            if (this.get('isFormValid')) {
                this.set('error', false)  
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
                    // coverURL: this.get('coverURL'),
                    
                }, uploadData);
                // set(this, 'isUploadingFile', false);
            }

            else {
                this.set('error', true);
                const errorLogger = get (this, 'errorLogger');
                errorLogger.logError('Invalid form');
            }
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
