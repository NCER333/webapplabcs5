//Another special type in Ts

function process(val: unknown){ //its similar to any, with any i wont get any error, 
    //with unknown i can add extra checks to my code before using it
    //here i can perform an if check to see if i can use the log function in my unknown val, 
    // if the check goes right there wont be an error like its appening now without the if 
    val.log()
}

//UNKNOWN FORCES THE DEVELOPER TO PERFORM A CHECK, WE CANT GET UNKNOWN ERROR

//optional parameters can be used them with the question mark

//?? is not ts operator, we can use this 

let input = '';

const didProvideInput = input ?? false; //it only looks for null or undefined, the left value, in this case we get an empty string logging it