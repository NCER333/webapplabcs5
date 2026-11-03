//classes are a javascript feature
//blueprints for objects
class User { //properties inside
    name = 'max';
    age: number;
    constructor(n: number){ //vanilla js
        //this.name = 'Max'; ERROR IN TS
        this.age = 30;  
    }
}

class User2 { //properties inside
    
    constructor(public age: number){  //i can also put the declaration here 
        
        this.age = 30;  
    }
}

const max = new User(30); // as js

//PUBLIC vs PRIVATE

//basically when we use public we can access that value everywhere,
//with private we can access that value only inside a class or in the scope of the var
// PROTECTED can let us access that property also in the class that are heritage of one