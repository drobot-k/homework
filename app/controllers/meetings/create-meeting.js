import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveMeeting(meeting) {
            let newMeeting = this.get('store').createRecord('meeting', meeting);
            await newMeeting.save();

            this.transitionToRoute('meetings.edit-meeting', newMeeting.get('id'));
        },
    },
});
