var redirectTo = (function () {
    'use strict';

    return {
        phonebook: function () {
            document.location.href = 'phonebook.html';
        },

        contact: function () {
            document.location.href = 'contact.html';
        },

        import: function () {
            document.location.href = 'import.html';
        }
    };
}());