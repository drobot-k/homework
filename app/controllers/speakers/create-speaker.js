import Controller from '@ember/controller';
import { inject as service } from '@ember/service'
import EmberObject from '@ember/object';

export default Controller.extend({
    init() {
        this._super(...arguments);
        this.set('speaker', EmberObject.create());
        this.get('speaker').set('surname', '');
        this.get('speaker').set('name', '');
        this.get('speaker').set('fName', '');
    },

    dataService: service ('data'),
    actions: {
        async saveSpeaker(speaker) {
            await this.get("dataService").createSpeaker({
                surname:speaker.surname,
                name:speaker.name,
                fName:speaker.fName,
            });

            this.transitionToRoute('speakers.index');
        },

        createSurname(surname) {
            this.set('surname', surname);
        },

        createName(name) {
            this.set('name', name);
        },

        createFName(fName) {
            this.set('fName', fName);
        },
    },

});