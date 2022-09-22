import Service from '@ember/service';
import ENV from 'homework/config/environment';

export default Service.extend({
    getBooks() {
        return fetch (`${ENV.backendURL}/books`).then((response) => response.json());
    },

    getSpeakers() {
        return fetch (`${ENV.backendURL}/speakers`).then((response) => response.json());
    },

    getBookId(id) {
        return fetch (`${ENV.backendURL}/books/${id}`).then((response) => response.json());
    },

    getSpeakerId(id) {
        return fetch (`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
    },

    deleteBook(id) {
        return fetch (`${ENV.backendURL}/books/${id}`, {method: 'DELETE'});
    },

    deleteSpeaker(id) {
        return fetch (`${ENV.backendURL}/speakers/${id}`, {method: 'DELETE'});
    }
});

