//let userRole = 0; // 0 = guest, 1 = admin -> so bad thing to do 

enum Role{
    Admin, Editor, Guest,
} //better type 

//let userRole: Role = 0; //from 0 to 2

let userRole: Role = Role.Admin; //it is better like this, for readibility

userRole = Role.Guest;