import DS from 'ember-data';

export default DS.Model.extend({
    photo: DS.attr('string'),
    surname: DS.attr('string'),
    name: DS.attr('string'),
    fName: DS.attr('string'),
});
