import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model({ id }) {
        return RSVP.hash({
            meeting: this.get('store').findRecord('meeting', id),
            speakers: this.get('store').findAll('speaker'),
            books: this.get('store').findAll('book')
        });
    },
});