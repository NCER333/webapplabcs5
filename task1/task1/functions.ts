function add(a: number, b: number) : number{ // always have to specify the type of params in the function delcaration
    return a+b;
}

function log(message: string): void { //this function does not return anything, 
    console.log(message);  //i can avoid specifying the return type

}


function logAndThrow(errorMessage: string): never{ //we can add never and its more specific in functions like this
    console.log(errorMessage);
    throw new Error(errorMessage);
}

function performJob(cb: Function){ //ofc i can pass a function in a parameter, but when specifying the type is better () => void
    cb();
}

function performJob2(cb: () => void){
    cb();
}

function performJob3(cb: (m: string) => void){ //i have also to specify if a function takes a parameter
    cb("job done");
}