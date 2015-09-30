(function ($) {
    'use strict';

    // Every contact in the phone book is linked to view page
    $('#contact-list').click(function (ev) {
        var selectedContactName = $('td:first-child', $(ev.target).parent()).text();
        document.location.href = 'contact.html?' + encodeURI(selectedContactName);
    });

    // New contact
    $('#new-contact-button').click(function () {
        redirectTo.contact();
    });

    // Import contacts
    $('#import-contacts-button').click(function () {
        redirectTo.import();
    });

    // Delete all contacts
    $('#delete-all-button').click(function () {
        localStorage.clear();
        location.reload();
    }).tooltip({html: true});
}(jQuery));