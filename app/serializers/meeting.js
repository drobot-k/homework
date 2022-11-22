/* eslint-disable no-unused-vars */
import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
    attrs: {
      reports: {
        serialize: false,
        deserialize: 'records',
      }
    },
    normalize(model, hash) {
        hash = this._super(...arguments);
    
        return hash;
      },

      extractRelationship(relationshipModelName, relationshipHash) {
        return this._super(...arguments);
      }
});