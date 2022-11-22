import Route from '@ember/routing/route';

export default Route.extend({
    model({id}) {
        return this.get('store').findRecord('meeting', id)
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
