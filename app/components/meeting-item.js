import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    moment: service(),
    actions: {
        async deleteMeeting(meeting) {
            await this.get('deleteMeeting')(meeting);

            //метод destroyRecord помечает в кеше запись на удаление и затем сразу отправляет запрос на удаление, в отличии от deleteRecord. В этом случае нужно было бы вызвать метод deleteRecord, а затем save()
            // await this.get('store').destroyRecord();
        }
    },

    didReceiveAttrs() {
        this._super(...arguments);
        
        this.set('dateToDisplay', this.get('moment').moment(this.get('date')).format('DD.MM.YYYY'));
    }
});
