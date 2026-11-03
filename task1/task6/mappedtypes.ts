//convert a type to another type

type Operations = {
    add?: (a: number, b: number) => number;
    sub?: (a: number, b: number) => number;
};
//they are related
type Results<T> = {
    //add: number,
    //sub: number
    [Key in keyof T]-?: number //mapped type, we take the object type of another one and we reuse them 
}; //-? to remove ? in the base type, now they are required
let mathOperations: Operations  = {
    add(a: number, b: number){
        return a+b;
    },
    sub(a: number, b: number){
        return a - b;
    }
}

