import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';
import { get, set } from '@ember/object';

export default Controller.extend({
    dataService: service ('data'),
    queryParams: ["search"],
    //дефолтное значение
    search: '',

    actions: {
        async deleteSpeaker(speaker) {          
            await speaker.destroyRecord();
            this.get('store').unloadRecord(speaker);
        },

        searchChange() {
            // s.preventDefault(); 
            // this.get('dataService').getSpeakers(this.get('search'));
            // this.send('refreshSpeakers');
            debounce(() => {
                set(this, 'search', get(this, 'searchSpeakers'));
                this.send('refreshSpeakers');
            }, 1000);
        }
    }
});