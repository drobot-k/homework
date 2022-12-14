import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    dataService: service ('data'),
    actions: {
        async saveSpeaker(speaker) {
            let speakerModel = this.get('model');
            speakerModel.set('photo', speaker.photo);
            speakerModel.set('surname', speaker.surname);
            speakerModel.set('name', speaker.name);
            speakerModel.set('fName', speaker.fName);

            await speakerModel.save();

            this.transitionToRoute('speakers.index');
        }
    }
});
