"use strict";
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message); //i can avoid specifying the return type
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
function performJob(cb) {
    cb();
}
function performJob2(cb) {
    cb();
}
function performJob3(cb) {
    cb("job done");
}
