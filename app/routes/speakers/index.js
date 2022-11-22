import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import { later } from '@ember/runloop'

export default Route.extend({
    dataService: service ('data'),
    queryParams: {
        search: true
    },

    // model() {
    //     return this.get('store').findAll('speaker');
    // }

    model({search}) {
        return new Promise ((resolve, reject) => {
            later(async () => {
                try {
                    let speakers = search ? await this.get("dataService").getSpeakers(search) : await this.get('store').findAll('speaker');  
                    resolve(speakers);
                }
                catch (e) {
                    reject('Connection failed');
                }   
            }, 1000);
        });
    },
    
    actions: {
        refreshSpeakers() {
            this.refresh();
        }
    }
});
