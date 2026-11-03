let age = 30; //i can change when i use let 
age = 29;
const userName = 'Max'; //i cant change this

//the contest of the variable is the same as C, if I create a var inside a function 
// of course i cant re-use that var outside of the function like for displaying it 

function add(a: number, b: number){
    var result;
    result = a+b;
    return result;

}

//console.log(result);  THIS WILL GET AN ERROR OF COURSE BOTH IN JS E TS

if(age > 20){
    var isOld = true;
}

//console.log(isOld); //in .ts this get an error, while in .js this works fine

//SYNTAX SUGAR IN TS 

const adds = (a: number, b: number) => a + b; //i can write a function like this
console.log(adds(5, 3));

//I can add a constant value to a parameter in a function like
const addconst = (a: number, b: number = 1) => a + b;
console.log(addconst(5)); //i dont have to put all the 2 parameters, the default parameters always at the end

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(hobbies[0]); //i have to push single elements ...hobbies will push every element
//| |
//SPREAD ARRAY 

//HOW TO COPY AN OBJECT

const person = {
    name: 'Max',
    age: 31
};

const copiedPerson = {... person}; // with the ... operator I can also copy object and extract all the elements

//WITH ... i CAN ALSO PASS AN ARRAY TO MY FUNCTION WITHOUT KNOWING HOW MANY PARAMATERS I CAN ACCEPT ALREADY 

const [hobby1, hobby2] = hobbies; // in this way i can extract the first 2 hobbies in the array
//this doesnt broke the original array 


