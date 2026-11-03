type FileSource = {path: string};

const fileSource: FileSource = {
    path: 'some/path/to/ahh.csv',
};

type DBSource = {
    connectionUrl: string
};

const dbSource: DBSource = {
    connectionUrl: 'thisone',
};

type Source = FileSource | DBSource; //a type that can be File source or db source 

function loadData(source: Source){
    if('path' in source){
       //source.path; we open the file
       return;
    }
    //source.connectionUrl otherwise we open the db
}

// i can add the type of the file so we dont have to check the properties of the type
// |.   .|
//DISCRIMINATED UNION TYPE

//INSTANCE OF IS ANOTHER GREAT WAY 

//FUNCTIONS OVERLOAD

function getLength(val: string) : string;
function getLength(val: any[]) : number;

function getLength(val: string | any[]): string | number{
    if(typeof val === 'string'){
        return "La stringa è lunga ...";
    }
    return val.length;
}

