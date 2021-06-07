var arr1 = [1, 2, 3, 4];
var arr2 = [2, 4, 6, 8];
var result = "";

var obj = {};

for (var i = 0; i < arr1.length; i++)
    obj[arr1[i]] = 1;

for (var i = 0; i < arr2.length; i++)
    if (obj[arr2[i]] != undefined)
        result += arr2[i] + " ";

console.log(result);