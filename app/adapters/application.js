/* eslint-disable no-unused-vars */
import DS from 'ember-data';
import ENV from 'homework/config/environment';

export default DS.JSONAPIAdapter.extend({
    //адрес бекенда мы уже ранее записали app -> config -> environment.js
    host: ENV.backendURL,

    //init когда объявляем объекты или массивы. Если объявление происходит не в методе init(), то такое свойство становится статическим, т.е доступно не в инстанции конкретного класса, а становится доступно на уровне инстанции всех классов одновременно
    init() {
        this._super(...arguments);
        this.set('headers', {
            'Content-Type': 'application/json'
        });
    },

    buildURL(modelName, id, snapshot, requestType, query) {
        let url = this._super(...arguments);
    
        if (modelName === 'meeting' && (requestType === 'findRecord' || requestType === 'findAll' || requestType === 'query') ) {
          url += '?_embed=reports';
        }
        if (modelName === 'report' && (requestType === 'findRecord' || requestType === 'findAll' || requestType === 'query') ) {
          url += '?_expand=speaker&_expand=book';
        }
        return url;
      },
      
      handleResponse(status, headers, payload) {
        const meta = {
          total: headers['x-total-count'],
        };
        payload.meta = meta;
        return this._super(status, headers, payload);
      },
});