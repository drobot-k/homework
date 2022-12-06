import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    photo: DS.attr('string'),
    surname: DS.attr('string'),
    name: DS.attr('string'),
    fName: DS.attr('string'),

    user: DS.belongsTo('user'),

    fullName: computed("surname", "name", "fName", function() {
        return `${this.surname} ${this.name} ${this.fName}`;
    }),
});
