import Service from '@ember/service';
import ENV from 'homework/config/environment';

export default Service.extend({
    getBooks(searchP, searchT) {
        let queryParams = '';
        if (searchP, searchT) {
            queryParams=`?q=${searchP}&tags_like=${searchT}`;
            return fetch (`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
        }

        else if (searchP) {
            queryParams=`?q=${searchP}`;
            return fetch (`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
        }

        else if (searchT) {
            queryParams=`?tags_like=${searchT}`;
            return fetch (`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
        }

        else {
            return fetch (`${ENV.backendURL}/books`).then((response) => response.json());
        }
    },

    // getBooks() {
    //     return fetch (`${ENV.backendURL}/books`).then((response) => response.json());
    // },

    getSpeakers(search) {
        let queryParams = '';
        if (search) {
            queryParams=`?q=${search}`;
        }
        return fetch (`${ENV.backendURL}/speakers${queryParams}`).then((response) => response.json());
    },

    // getSpeakers() {
    //     return fetch (`${ENV.backendURL}/speakers`).then((response) => response.json());
    // },

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
    },

    createBook(id) {
        return fetch (`${ENV.backendURL}/books`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(id),
        });
    },

    createSpeaker(id) {
        return fetch (`${ENV.backendURL}/speakers`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(id),
        });
    },

    updateBook(book) {
        return fetch (`${ENV.backendURL}/books/${book.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book),
        });
    },

    updateSpeaker(speaker) {
        return fetch (`${ENV.backendURL}/speakers/${speaker.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(speaker),
        });
    },
});

