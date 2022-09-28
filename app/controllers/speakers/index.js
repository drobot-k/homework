import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
    dataService: service ('data'),
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
        }
    },

    queryParams: ["search"],
    search: '',
});