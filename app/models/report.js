import DS from 'ember-data';

export default DS.Model.extend({
    speakers: DS.belongsTo('speaker'),
    books: DS.belongsTo('book'),
    meetings: DS.belongsTo('meeting'),
});
