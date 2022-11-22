import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    moment: service(),
    model() {
        const currentDate = new Date().toISOString();
        let formattedDate = this.get('moment').moment(currentDate).format('DD.MM.YYYY');
        return {date: formattedDate}
    }
});
