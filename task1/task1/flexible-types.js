"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 30; //i dont have to use it because we are coming back to vanilla js
let age = 36; //i can use the union for the types also and specify which types i want
age = '30';
//MULTI TYPE VARIABLE
//ARRAYS
let hobbies = ['Sports', 'Cooking'];
hobbies.push(10); //also with lists i have this type problem of course
//let users: (string | number)[]; //i Can do like this
let users; //better style 
let possibleResults;
let user = {
    name: string,
    age: number | string,
    role: {
        description: string,
        id: number,
    }
} = {
    name: 'Max',
    age: 38
}; // SO WEIRD
//# sourceMappingURL=flexible-types.js.map