//intersection can let us combine more types to an object with '&' 

//EXAMPLE 
type FileData = {
    path: string;
    content: string;
};

type Status = {
    isOpen: boolean;
    errorMessage?: string; //optional
};

type AccessedFile = FileData & Status;

//it makes sense to create more types and combine them so we can save 
// resources reusing the types only when strictly neeeded
