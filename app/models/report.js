import DS from 'ember-data';

export default DS.Model.extend({
    reportDate: DS.attr('string'),
    meetingId: DS.attr('number'),
    bookId: DS.attr('number'),
    speakerId: DS.attr('number'),
    bookRating: DS.attr('number'),
    presentationURL: DS.attr('string'),
    videoURL: DS.attr('string'),
    review: DS.attr('string'),

    speaker: DS.belongsTo('speaker'),
    book: DS.belongsTo('book'),
    meeting: DS.belongsTo('meeting'),
    user: DS.belongsTo('user')
});

