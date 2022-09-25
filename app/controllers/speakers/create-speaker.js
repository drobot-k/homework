import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
    dataService: service ('data'),
    actions: {
        async saveSpeaker(e) {
            e.preventDefault();

            await this.get("dataService").createSpeaker({
                surname: this.get('surname'),
                name: this.get('name'),
                fName: this.get('fName'),

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