/* eslint-disable no-unused-vars */
// import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    normalize(model, hash) {
        hash = this._super(...arguments);
        // let hashCopy = Object.assign({}, hash);
        // hashCopy.attributes = {};
        // hashCopy.attributes.photo = hashCopy.photo;
        // hashCopy.attributes.surname = hashCopy.surname;
        // hashCopy.attributes.name = hashCopy.name;
        // hashCopy.attributes.fName = hashCopy.fName;
        // delete hashCopy.photo;
        // delete hashCopy.surname;
        // delete hashCopy.name;
        // delete hashCopy.fName;
        // hash = {
        //   data: hashCopy
        // };
    
        return hash;
      },
      
    // serialize(snapshot, options) {
    //   let json = this._super(...arguments);
    //   json.type = snapshot.modelName;
    //   return json;
    // }
});
