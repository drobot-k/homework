import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveMeeting(meeting) {
            // this.get('model').setProperties(meeting);
            // await this.get('model').save();

            let meetingModel = this.get('model');
            meetingModel.set('date', meeting.date);

            await meetingModel.save();

            this.transitionToRoute('meetings.index');
        }
    }
});
