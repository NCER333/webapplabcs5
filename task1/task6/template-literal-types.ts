const mainUserName = 'Alessio';

const greeting = `Hi there ${mainUserName}`;

type ReadPermission = 'no-read' | 'read';
type WritePermission = 'write' | 'no-write'
type filePermission = `${ReadPermission}-${WritePermission}`; //it can save us so many lines of code 


