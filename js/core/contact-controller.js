var contact = (function ($) {
    'use strict';

    function Contact(phone, name, location, gender, zodiac, notes) {
        this.phone = phone;
        this.name = name;
        this.location = location;
        this.gender = gender;
        this.zodiac = zodiac;
        this.notes = notes;
    }

    function add(phone, name, location, gender, zodiac, notes) {
        var contact = new Contact(phone, name, location, gender, zodiac, notes);
        localStorage.setItem(name.toString(), JSON.stringify(contact));
    }

    function getSelected() {
        var selectedContact,
            selectedContactName = decodeURI(window.location.search.substring(1));
        if (!selectedContactName) {
            return false;
        }

        localStorage.getItem(selectedContactName) !== null
            ? selectedContact = JSON.parse(localStorage.getItem(selectedContactName))
            : selectedContact = JSON.parse(sessionStorage.getItem('CACHED_CONTACT'));
        return selectedContact;
    }

    function getAll() {
        var contacts = [];
        for (var i = 0, len = localStorage.length; i < len; i += 1) {
            contacts.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        contacts.sort(function (a, b) {
			var aName = a.name.toLowerCase(),
				bName = b.name.toLowerCase();
			if (aName < bName) {
				return -1;
			}
			if (aName > bName) {
				return 1;
			}
			return 0;
        });

        return contacts;
    }

    return {
        add: add,
        getSelected: getSelected,
        getAll: getAll
    };
}(jQuery));