/*
    Compund Interest
    CI = P * (1 + (R/100))^T
*/

var P = 2000; //principal amount
var T = 3; //time in years
var R = 5; //Rate of interest 

var amount = P * (1 + (R/100))**T;
var ci = amount-P;

console.log(ci);

