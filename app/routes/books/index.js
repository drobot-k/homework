import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
// import { Promise } from 'rsvp';
// import { later } from '@ember/runloop'

export default Route.extend({
    dataService: service ('data'),
    queryParams: {
        searchP: true,
        searchT: true
    },
    model() {
        //обращаемся к сервису store к методу findAll к модели book (название должно совпадать со сгенерированной моделью)
        return this.get('store').findAll('book')
    },
});