/* eslint-disable no-console */
import Component from '@ember/component';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Component.extend({
    moment: service(),
    didInsertElement() {

        this._super(...arguments);
        const self = this;

        $('.datepicker').datepicker({
        clearBtn: true,
        format: "dd.mm.yyyy",
        language: "ru",
            autoclose: true
        })

        .on('changeDate', function(e) {
            let formattedDate = self.get('moment').moment(e.date).format('YYYY-MM-DD');
            self.get('changeDate')(formattedDate);
        })
    },

    didReceiveAttrs() {
        this._super(...arguments);
        
        if (this.get('chooseNewDate')) {
            this.set('dateToDisplay', this.get('currentDate'))
        }
        else {
            this.set('dateToDisplay', this.get('moment').moment(this.get('currentDate')).format('DD.MM.YYYY'));
        }
    }


});