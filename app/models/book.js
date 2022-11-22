import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    rating: DS.attr('string'),
    author: DS.attr('string'),
    pages: DS.attr('number'),
    description: DS.attr('string'),
    tags: DS.attr(),
    coverURL: DS.attr('string'),
});
