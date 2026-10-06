"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName;
let userAge = 38; // i dont need to set the type because it has in its initializing
userName = 'Max';
userAge = '34'; //getting an error bcs of the explicit type
function add(a, b = 5) {
    return a + b;
}
add(10);
add('10'); //error
add(10, 6);
add(10, '67'); //error
//# sourceMappingURL=basics.js.map