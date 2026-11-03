"use strict";
class Userr {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get getFullname() {
        return this.firstName + ' ' + this.lastName;
    }
}
const person1 = new Userr('Max', 'Red');
console.log(person1.getFullname); //here i have to call the method without the (), because of the keyword get in the class
