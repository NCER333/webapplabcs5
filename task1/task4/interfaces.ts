//In js there are no interfaces, it is a feature of typescript
// i use interfaces to group classes that are of the same field, 
// for example here in this interface Auth i can put all the classes that can help the Authentication 
interface Auth{
    email: string;
    password: string;

    login() : void; //here i dont have to write the logic of the methods
    logout() : void; // I have only to declare everything that this interface can cover
}

//how to use the interface

let user: Auth;

user = {
    email:'test@gmail.com',
    password: '1224',
    login(){
        //here i have to implement the logic of the method 
    },

    logout() {
        // Same here, in the interface i dont need to write what the method does but in the object yes
    }
}

// INTERFACE vs TYPE
// The main difference is that we can automatically extend interfaces while we cant with type
// If we dont have to extend in another file an interface the Keyword type is enough

//Implements keyword: we can force the class to have a certain shape, 
// in this case AuthUser uses the Auth interface


class AuthUser implements Auth{ 
    constructor( 
        public userName: string,
        public email: string,
        public password: string
    ){}

    login(){
        
    }
    logout(){ 
        
    }

}

//extends keyword also to extend an interface, we do not touch the original interface, we just create a new one


