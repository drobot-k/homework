import Component from '@ember/component';

export default Component.extend({
    actions: {
        deleteSpeaker(idSpeaker) {
            this.get('deleteSpeaker')(idSpeaker);
        }
    }
});
