type StringArray = string[];
type ElementType<T extends any[]>= T[number];

type Example1 = ElementType<StringArray>

let text = 1;

//type Example2 = ElementType<typeof text>; --> Error

type GetElementType<T> = T extends any[] ? T[number] : never;

//now i can do like this

type Example2 = GetElementType<typeof text>;


//these features are very important when building brand new libraries


type FullNamePerson = {firstName: string, lastName: string}
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;
function getFullNames<T extends object>(person: T): FullNameOrNothing<T>{
    if('firstName' in person && 'lastName' in person && person.firstName && person.lastName){
        return `${person.firstName}` as FullNameOrNothing<T>;
    }
    throw new Error('error with the name');
}
