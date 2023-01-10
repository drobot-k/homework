/* eslint-disable no-unused-vars */
import EmberObject from '@ember/object';
// import { inject as service } from '@ember/service';
import { inject as service } from '@ember/service';

export default EmberObject.extend({
  store: service(),

  logError (error) {
    let date = this.currentDate();
    // let ip = this.ip();

    let errorToSend = {
      errorMessage: error,
      errorDate: date,
      // userIp: ip,
      errorURL: window.location,
      clientIP: '',
    };

    let newError = this.get('store').createRecord('logger-error', errorToSend);
    return newError.save();
  },

  currentDate() {
    // moment: service(),

    // let date = moment();
    let currentDate = Date.now();
    let date = new Date (currentDate);
    return date.toISOString();
  },

  // ip() {
  //   // let express = require('express');
  //   // let app = express();

  //   // app.get('/', function (req, res) {
  //     // console.dir(req.ip)
  //   // })

  // },

  });