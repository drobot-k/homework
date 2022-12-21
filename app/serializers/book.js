/* eslint-disable no-unused-vars */
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    normalize(model, hash) {
        return this._super(...arguments);
        // let hashCopy = Object.assign({}, hash);
        // hashCopy.attributes = {};
        // hashCopy.attributes.title = hashCopy.title;
        // hashCopy.attributes.rating = hashCopy.rating;
        // hashCopy.attributes.author = hashCopy.author;
        // hashCopy.attributes.pages = hashCopy.pages;
        // hashCopy.attributes.description = hashCopy.description;
        // hashCopy.attributes.tags = hashCopy.tags;
        // hashCopy.attributes.coverURL = hashCopy.coverURL;
        // delete hashCopy.title;
        // delete hashCopy.rating;
        // delete hashCopy.author;
        // delete hashCopy.pages;
        // delete hashCopy.description;
        // delete hashCopy.tags;
        // delete hashCopy.coverURL;
        // hash = {
        //   data: hashCopy
        // };
    
        // return hash;
      },
      
    // serialize(snapshot, options) {
    //   let json = this._super(...arguments);
    //   json.type = snapshot.modelName;
    //   return json;
    // }
});
