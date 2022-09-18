import Service from '@ember/service';
import ENV from 'homework/config/environment';
import { A } from '@ember/array';

export default Service.extend({
    init() {
        this._super(...arguments);
        this.set('books', A());
    },

    async getBooks() {
        let response = await fetch (`${ENV.backendURL}/books`);
        let books = await response.json();
        this.get('books').clear();
        this.get('books').pushObjects(books);
        return this.get('books');
    },

    getSpeakers() {
        return fetch (`${ENV.backendURL}/speakers`).then((response) => response.json());
    },

    getBookId(id) {
        //return fetch (`${ENV.backendURL}/books/${id}`).then((response) => response.json());
        return this.get('books').find((book) => book.id === parseInt(id));
    },

    getSpeakerId(id) {
        return fetch (`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
    },

    deleteBook(id) {
        this.get('books').removeObject(id);
        return fetch (`${ENV.backendURL}/books/${id}`, {method: 'DELETE'});
    },

    deleteSpeaker(id) {
        return fetch (`${ENV.backendURL}/speakers/${id}`, {method: 'DELETE'});
    }
});

// import Service from '@ember/service';
// import ENV from 'homework/config/environment';

// export default Service.extend({
//     getBooks() {
//         return fetch (`${ENV.backendURL}/books`).then((response) => response.json());
//     },

//     getSpeakers() {
//         return fetch (`${ENV.backendURL}/speakers`).then((response) => response.json());
//     },

//     getBookId(id) {
//         return fetch (`${ENV.backendURL}/books/${id}`).then((response) => response.json());
//     },

//     getSpeakerId(id) {
//         return fetch (`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
//     },

//     deleteBook(books) {
//         return fetch (`${ENV.backendURL}/books/${books.id}`, {method: 'DELETE'});
//     },

//     deleteSpeaker(id) {
//         return fetch (`${ENV.backendURL}/speakers/${id}`, {method: 'DELETE'});
//     }
// });

