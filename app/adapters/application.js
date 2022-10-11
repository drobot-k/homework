import DS from 'ember-data';
import ENV from 'homework/config/environment';

export default DS.JSONAPIAdapter.extend({
    //адрес бекенда мы уже ранее записали app -> config -> environment.js
    host: ENV.backendURL,

    //init когда объявляем объекты или массивы. Если объявление происходит не в методе init(), то такое свойство становится статическим, т.е доступно не в инстанции конкретного класса, а становится доступно на уровне инстанции всех классов одновременно
    init() {
        this._super(...arguments);
        this.set('headers', {
            'Content-Type': 'application/json'
        });
    }
});
