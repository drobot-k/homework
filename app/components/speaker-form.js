import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm(e) {
            e.preventDefault();

            this.onsubmit({
                id: this.get('idSpeaker'),
                surname: this.get('surname'),
                name: this.get('name'),
                fName: this.get('fName'),
            });
        },
    },

    didReceiveAttrs() {
        this._super(...arguments);
        this.setProperties({
            idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
            surname: this.get('speaker.surname'),
            name: this.get('speaker.name'),
            fName: this.get('speaker.fName'),
        });
    },
});
