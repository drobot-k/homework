import Component from '@ember/component';

export default Component.extend({
    actions: {
        submitForm(e) {
            e.preventDefault();

            this.onsubmit(this.get('speaker'));
        }
    }
});
