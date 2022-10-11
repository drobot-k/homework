import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service ('data'),
    queryParams: ["search"],
    //дефолтное значение
    search: '',

    actions: {
        async deleteSpeaker(speaker) {          
            await speaker.destroyRecord();
        },

        searchSpeakers(s) {
            s.preventDefault(); 
            this.get('dataService').getSpeakers(this.get('search'));
            this.send('refreshSpeakers');
        }
    }
});