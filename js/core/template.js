(function ($) {
    'use strict';
    var allContacts = contact.getAll(),
        template = Handlebars.compile($('#phonebook-records').html()),
        compiledHtml = template({contact: allContacts});
    $('#contact-list').html(compiledHtml);
}(jQuery));