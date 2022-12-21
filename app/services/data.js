/* eslint-disable no-unused-labels */
/* eslint-disable no-console */
import Service from '@ember/service';
import ENV from 'homework/config/environment';
import { inject as service } from '@ember/service';
// import { computed } from '@ember/object';
// import $ from 'jquery';

export default Service.extend({
    session: service(),
    store: service(),
    host: ENV.backendURL,

    getBooks(searchP, searchT) {
        // let queryParams = '';
        if (searchP, searchT) {
            // queryParams=`?q=${searchP}&tags_like=${searchT}`;
            // return fetch (`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
            return this.get('store').query('book', {q: searchP, tags_like: searchT});
        }

        else if (searchP) {
            // queryParams=`?q=${searchP}`;
            // return fetch (`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
            return this.get('store').query('book', {q: searchP});
        }

        else if (searchT) {
            // queryParams=`?tags_like=${searchT}`;
            // return fetch (`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
            return this.get('store').query('book', {tags_like: searchT});
        }

        else {
            // return fetch (`${ENV.backendURL}/books`).then((response) => response.json());
            return this.get('store').findAll('book');
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

    // getBookId(id) {
    //     return fetch (`${ENV.backendURL}/books/${id}`).then((response) => response.json());
    // },

    // getSpeakerId(id) {
    //     return fetch (`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
    // },

    // deleteBook(book) {
    //     return fetch (`${ENV.backendURL}/books/${book}`, {method: 'DELETE'});
    // },

    // deleteSpeaker(id) {
    //     return fetch (`${ENV.backendURL}/speakers/${id}`, {method: 'DELETE'});
    // },

    async saveCover(newBook, uploadData) {
        return new Promise(async (resolve, reject) => {
          try {
          
            uploadData.url = `${ENV.fileUploadURL}`;

            // headers: computed(function() {
            //   let resultHeaders = {
            //     'Content-Type': 'application/json'
            //   };
        
            //   if (this.get('session.isAuthenticated')) {
            //     resultHeaders['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
            //   }
        
            //   return resultHeaders;
            // }).volatile(),

            // $.ajax({
            //   // url: 'application/json',
            //   headers: { 'Authorization': `Bearer ${this.session.data.authenticated.token}` },
            // });

            uploadData.headers = { 'Authorization': `Bearer ${this.session.data.authenticated.token}` };

            uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
              try {    
                // eslint-disable-next-line no-console
                console.log('Ok');
                resolve(result.filename);
              }
              catch (e) {
                reject(e);
              }
            }).fail((jqXhr, textStatus, errorThrown) => {
              reject(errorThrown);
            });
          }
          catch (e) {
            reject(e);
          }
        });
    },

    // createSpeaker(id) {
    //     return fetch (`${ENV.backendURL}/speakers`, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(id),
    //     });
    // },

    // updateBook(book) {
    //     return fetch (`${ENV.backendURL}/books/${book.id}`, {
    //         method: 'PATCH',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(book),
    //     });
    // },

    // updateSpeaker(speaker) {
    //     return fetch (`${ENV.backendURL}/speakers/${speaker.id}`, {
    //         method: 'PATCH',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(speaker),
    //     });
    // },
});

