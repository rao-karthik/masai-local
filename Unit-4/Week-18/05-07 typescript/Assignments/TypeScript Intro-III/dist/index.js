"use strict";
function getName({ firstName, lastName }) {
    if (lastName) {
        return (firstName + " " + lastName);
    }
    else {
        return firstName;
    }
}
function PhoneBook(personDetails) {
    let arr = [];
    arr.push(personDetails);
    return arr;
}
