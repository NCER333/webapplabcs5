function add(a: number, b: number){
    return a+b;
}

type AddFn = typeof add;
//infer can extracte extra information for the type 
type ReturnValueType <T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValueType<AddFn>; //extract nested type information 