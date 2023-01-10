import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import { get } from '@ember/object';

export default Route.extend({
    dataService: service ('data'),

    model({ id }) {
        try{
            return this.get('store').findRecord('speaker', id);
        }
        catch(e){
            get(this, 'errorLogger').log(e.message, get(this, 'currentURL'));                
        }
    }
});
