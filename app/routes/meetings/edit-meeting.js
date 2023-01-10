import Route from '@ember/routing/route';
import { get } from '@ember/object';

export default Route.extend({
    model({id}) {
        try{
            return this.get('store').findRecord('meeting', id)
        }
        catch(e){
            get(this, 'errorLogger').log(e.message, get(this, 'currentURL'));                
        }
    }

    // {
    //     model ({postId}) {
    //       const store = this.get('store')
    //       const model = this.modelFor('posts')
      
    //       return RSVP.hash({
    //         ...model,
    //         currentPost: store.peekRecord('post', postId),
    //       })
    //     }
    //   }
});
