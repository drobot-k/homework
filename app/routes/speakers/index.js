import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({
    dataService: service ('data'),
    queryParams: {
        search: true
    },

    model() {
        return this.get('store').findAll('speaker');
    }
});
