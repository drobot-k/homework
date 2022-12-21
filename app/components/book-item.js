import Component from '@ember/component';

export default Component.extend({
    actions: {
        deleteBook(book) {
            this.get('deleteBook')(book);

            //метод destroyRecord помечает в кеше запись на удаление и затем сразу отправляет запрос на удаление, в отличии от deleteRecord. В этом случае нужно было бы вызвать метод deleteRecord, а затем save()
            // await this.get('store').destroyRecord();
        }
    },

});
