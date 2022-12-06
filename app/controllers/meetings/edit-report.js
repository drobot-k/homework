import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveReport(report) {

            let reportModel = this.get('model');
            reportModel.set('date', report.reportDate);
            reportModel.set('book', report.book);
            reportModel.set('speaker', report.speaker);
            reportModel.set('bookRating', report.bookRating);
            reportModel.set('presentationURL', report.presentationURL);
            reportModel.set('videoURL', report.videoURL);
            reportModel.set('review', report.review);

            await reportModel.save();
            this.transitionToRoute('meetings.edit-meeting', reportModel.get('id'));

            // this.transitionToRoute('meetings.index');
        },

        async clear(report) {
            await this.get('clear')(report);
        },
    },
});
