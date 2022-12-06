import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveReport(report) {
            let newReport = this.get('store').createRecord('report', report);
            newReport.set('meeting', this.get('model.meeting'));
            await newReport.save();

            this.transitionToRoute('meetings.edit-meeting', newReport.get('meetingId'));
        },

        async clear(report) {
            await this.get('clear')(report);
        },
    },
});