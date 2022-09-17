import Component from '@ember/component';
import { inject as service } from '@ember/service'

export default Component.extend({
    dataService: service ('data'),
    actions: {
        async deleteSpeaker(id) {
            await this.get('dataService').deleteSpeaker(id);
            this.transitionToRoute('speakers.index');
        }
    }
});
