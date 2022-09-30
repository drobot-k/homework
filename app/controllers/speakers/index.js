import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service ('data'),
    queryParams: ["search"],
    //дефолтное значение
    search: '',

    actions: {
        async deleteSpeaker(id) {
            try {
                await this.get('dataService').deleteSpeaker(id);
                // eslint-disable-next-line ember/closure-actions
                this.send('refreshSpeakers');
            }
            catch (e) {
                this.send('error', new Error ('Connection failed'));
            }
        },

        searchSpeakers(s) {
            s.preventDefault(); 
            this.get('dataService').getSpeakers(this.get('search'));
            this.send('refreshSpeakers');
        }
    }
});