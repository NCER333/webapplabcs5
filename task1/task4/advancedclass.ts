class Userr{
    constructor(protected  firstName: string, protected lastName: string){}

    //even if the properties of the class are private i can log them if i create a method inside the class
    get getFullname(){
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = new Userr('Max', 'Red'); 
console.log(person1.getFullname); //here i have to call the method without the (), because of the keyword get in the class

// SETTER, we can use this keyword to set a value in a class and perform some checks, for example

class UserSetter{

    public _firstName: string = '';

    set firsstName(name: string){
        if(name.trim() === ''){
            throw new Error('The name is empty')
        }
        this._firstName = name;
    }

}

// STATIC: static is a property of the class itself, we dont have to set it, even without the object the static is setted
//it is about the class not about an identity object 

// Class extension, in ts like js we can of course extend classes 

class Employee extends Userr {
    
    constructor(public jobTitle: string, firstName: string, lastName: string){
        super(firstName, lastName); //if i dont initialize them in the superclass (User) then i have to recall them here 
    }

    //THE MAIN THING TO REMEMBER WITH EXTENSION IS THE 'PROTECTED' RULE INSTEAD OF PRIVATE
}

//ABSTRACT CLASS: they can only be used as the base for other classes, we cant access them directly
//instead we can extend them and use as a foundation for the other code we want to write
