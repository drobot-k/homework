import Component from '@ember/component';

export default Component.extend({
    actions: {
        async deleteReport(report) {          
            await report.destroyRecord();
            this.get('store').unloadRecord(report);
        },
    },
});
