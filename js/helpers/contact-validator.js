(function ($) {
    'use strict';

    // Additional methods
    function isPropertyValueUnique(contacts, key, value) {
        for (var obj in contacts) {
            if (contacts[obj][key] === value) {
                return false;
            }
        }
        return true;
    }

    $.validator.addMethod('uniquePhone', function (value) {
        return isPropertyValueUnique(contact.getAll(), 'phone', value);
    }, 'Този телефонен номер вече съществува в указателя.');

    $.validator.addMethod('uniqueName', function (value) {
        return isPropertyValueUnique(contact.getAll(), 'name', value);
    }, 'Такова име вече съществува в указателя.');

    // Validation
    $('#contact-form').validate({
        rules: {
            phone: {
                required: true,
                pattern: /^\+[0-9]{5,12}$|^0[0-9]{4,9}$/,
                uniquePhone: true
            },
            name: {
                required: true,
                uniqueName: true
            },
            gender: {
                required: true
            }
        },

        messages: {
            phone: {
                required: 'Въведете телефонен номер.',
                pattern: 'Невалиден телефонен номер.'
            },
            name: {
                required: 'Въведете име.'
            },
            gender: {
                required: 'Изберете един от двата пола.'
            }
        },

        errorPlacement: function (error, element) {
            error.addClass('alert alert-danger col-xs-12');
            error.css({'padding': '2px 12px', 'margin-top': '3px', 'margin-bottom': '0'});
            if (element.attr('name') === 'gender') {
                error.insertAfter('#radio-group-gender');
                $('<br>').insertAfter('#radio-group-gender');
            } else {
                error.insertAfter(element);
            }

            $('#radio-group-gender').click(function () {
                $(this).siblings().remove();
            });
        },

        submitHandler: function (form) {
            var $phone = $('#phone').val(),
                $name = $('#name').val(),
                $location = $('#location').val(),
                $gender = $('input[name="gender"]:checked', '#contact-form').val(),
                $zodiac = $('#zodiac').val(),
                $notes = $('#notes').val();

            contact.add($phone, $name, $location, $gender, $zodiac, $notes);
            form.submit();
        }
    });
}(jQuery));