import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service ('data'),
    actions: {
        async saveSpeaker(speaker) {
            await this.get("dataService").updateSpeaker({
                surname:speaker.surname,
                name:speaker.name,
                fName:speaker.fName,
                id: speaker.id,
            });
            this.transitionToRoute('speakers.index');
        }
    }
});
