var a = true || false || false && false;  //Output required = false
console.log("Not Possible");

var b = true || true && false || true;  //Output required = true
console.log(b);

var c = false || true || false || false && true;  //Output required = false
console.log("Not Possible");

var d = false && true || true || true && false; //Output required = true
console.log(d);

var e = false || false || false && true || false; //Output required = false
console.log(e);

