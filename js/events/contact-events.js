(function ($) {
    'use strict';
    var currentContact;

    // Initial view
    $('#contact-form').ready(function () {
        currentContact = contact.getSelected();
        if (currentContact) {
            $('#phone').val(currentContact.phone);
            $('#name').val(currentContact.name);
            $('#location').val(currentContact.location);
            $('input[name="gender"][value=' + currentContact.gender + ']').prop('checked', true).parent().addClass('active');
            $('#zodiac').val(currentContact.zodiac);
            $('#notes').val(currentContact.notes);

            $('input, select, textarea').prop('disabled', true);
            $('.gender-button-label').addClass('disabled');
            $('#add-contact').hide();
            $('#edit-contact-button').show();
            $('#delete-contact-button').show();
        }
    });

    // Edit
    $('#edit-contact-button').click(function (ev) {
        ev.preventDefault();
        $('input, select, textarea').prop('disabled', false);
        $('.gender-button-label').removeClass('disabled');
        $('#edit-contact-button').hide();
        $('#edit-done-button').show();
        sessionStorage.setItem('CACHED_CONTACT', JSON.stringify(currentContact));
        localStorage.removeItem($('#name').val());
    });

    // Delete
    $('#delete-contact-button').click(function (ev) {
        ev.preventDefault();
        currentContact = contact.getSelected();
        if (currentContact) {
            localStorage.removeItem(currentContact.name, JSON.stringify(currentContact));
        }
        redirectTo.phonebook();
    });

    // Cancel
    $('#contact-cancel-button').click(function (ev) {
        ev.preventDefault();
        currentContact = contact.getSelected();
        if (currentContact) {
            localStorage.setItem(currentContact.name, JSON.stringify(currentContact));
        }
        redirectTo.phonebook();
    });
}(jQuery));
