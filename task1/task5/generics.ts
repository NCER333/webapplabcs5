let names: Array<string> = ['Alessio', 'Marco']; //generic type Array, flexible types  

//our own generic type

type DataStore<T> = { //generic type with <>, T is a placeholder
    [key: string]: T
};

let store: DataStore<string | boolean> = {};
store.name = 'Alessio';

//generic functions
function merge(a: any, b: any){
    return [a, b];
}

const ids = merge(1, 2); //it will return any in this way 

function merge2<T>(a: T, b: T){
    return [a, b];
}

const ids2 = merge2(1, 2); //it will return numbers in this way, better option here is to use the generic function

// I can put multiple placeholders to have multiple types 

function mergeObj<T extends object >(a: T, b: T){ //it has to be an object with the extends
    return {...a, ...b};
}

//also the class and interfaces can be generic with the same syntax
