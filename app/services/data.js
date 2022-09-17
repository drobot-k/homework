import Service from '@ember/service';
import ENV from 'homework/config/environment';

export default Service.extend({
    getBooks() {
        return fetch (`${ENV.backendURL}/books`).then((responce) => responce.json());
    },

    getSpeakers() {
        return fetch (`${ENV.backendURL}/speakers`).then((responce) => responce.json());
    },

    getBookId(id) {
        return fetch (`${ENV.backendURL}/books/${id}`).then((responce) => responce.json());
    },

    getSpeakerId(id) {
        return fetch (`${ENV.backendURL}/speakers/${id}`).then((responce) => responce.json());
    },

    deleteBook(id) {
        return fetch (`${ENV.backendURL}/books/${id}`, {method: 'DELETE'});
    },

    deleteSpeaker(id) {
        return fetch (`${ENV.backendURL}/speakers/${id}`, {method: 'DELETE'});
    }
});
