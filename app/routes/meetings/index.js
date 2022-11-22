import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { PER_PAGE } from '../../controllers/meetings/index';

export default Route.extend({
    queryParams: {
        search: {
            refreshModel: true
        },
        page: {
            refreshModel: true
        },
        speaker: {
            refreshModel: true
        },
        book: {
            refreshModel: true
        },
        date: {
            refreshModel: true
        },
      },

    model({ search, page, speaker, book, date }) {
        // return this.get('store').findAll('meeting'),

        const query = {
            _page: page,
            _limit: PER_PAGE,
          };
      
          if (search) {
            query.q = search;
          }
      
          if (speaker) {
            query.speaker = speaker;
          }

          if (book) {
            query.book = book;
          }

          if (date) {
            query.date = date;
          }
      
          return RSVP.hash({
            speakers: this.get("store").findAll('speaker'),
            books: this.get("store").findAll('book'),
            meetings: this.get("store").query('meeting', query),
          });
      },

      actions: {
        refreshModel() {
          this.refresh();
        }
      }
});
