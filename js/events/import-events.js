(function ($) {
    'use strict';

    // Bootstrap Tooltip
    $('#import-textarea').tooltip({placement: 'bottom', delay: {show: 1000}});

    // Allows TAB key-press in textarea
    $(document).delegate('#import-textarea', 'keydown', function (ev) {
        var keyCode = ev.keyCode || ev.which;
        if (keyCode === 9) {
            ev.preventDefault();
            var start = $(this).get(0).selectionStart,
                end = $(this).get(0).selectionEnd;
            $(this).val($(this).val().substring(0, start) + '\t' + $(this).val().substring(end));
            $(this).get(0).selectionStart = $(this).get(0).selectionEnd = start + 1;
        }
    });

    // Import all contacts
    $('#do-import-button').click(function (ev) {
        var result = $('#import-textarea').val()
            .split('\n')
            .filter(function (n) {
                return !!n;
            }).map(function (value) {
                var rawContact = value.split('\t')
                    .filter(function (n) {
                        return !!n;
                    });
                rawContact[3] === 'м' || 'М' ? rawContact[3] = 'Мъж' : rawContact[3] = 'Жена';
                rawContact[4] = rawContact[4].charAt(0).toUpperCase() + rawContact[4].substring(1).toLowerCase();
                contact.add.apply(this, rawContact);
            });
    });

    // Cancel
    $('#import-cancel-button').click(function (ev) {
        ev.preventDefault();
        redirectTo.phonebook();
    });
}(jQuery));