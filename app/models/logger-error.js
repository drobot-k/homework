import DS from 'ember-data';

export default DS.Model.extend({
    errorMessage: DS.attr('string'),
    errorDate: DS.attr('string'),
    errorURL: DS.attr('string'),
    clientIP: DS.attr('string'),
});
