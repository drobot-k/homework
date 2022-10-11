import Component from '@ember/component';

export default Component.extend({
    actions: {
        async deleteSpeaker(speaker) {
            await this.get('deleteSpeaker')(speaker);
        }
    }
});
