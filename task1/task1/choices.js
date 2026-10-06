"use strict";
//let userRole = 0; // 0 = guest, 1 = admin -> so bad thing to do 
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {})); //better type 
//let userRole: Role = 0; //from 0 to 2
let userRole = Role.Admin; //it is better like this, for readibility
userRole = Role.Guest;
