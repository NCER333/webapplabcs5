// ! operator can be used in a line of code where we can get a null value SPECIFIC TS OPERATOR
// ? operator in a value that could be null

const inputEl = document.getElementById('Username')! as HTMLInputElement; //-> type casting with as

console.log(inputEl?.value); //with the casting the error on the value disappear

// type casting or type assertion, convincing typescript that an element is of another type
