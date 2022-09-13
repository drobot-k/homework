import Service from '@ember/service';

export default Service.extend({
    getBooks() {
        return fetch ('http://localhost:3000/books').then((responce) => responce.json());
    },

    getSpeakers() {
        return fetch ('http://localhost:3000/speakers').then((responce) => responce.json());
    }
});
