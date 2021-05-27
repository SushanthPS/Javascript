var items = ['a', 'b', 'c', 'd', 'a', 'c'];

var data = {};
var arr = [];

for (var i = 0; i < items.length; i++)
    if (data[items[i]] == undefined)
        data[items[i]] = 1;
    else
        data[items[i]]++;

for (key in data)
    if (data[key] > 1)
        arr.push(key);

console.log(arr);