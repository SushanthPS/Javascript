var items = ['A', 'B', 'A', 'C', 'D', 'C'];

var data = {};

for (var i = 0; i < items.length; i++)
    data[items[i]] = 0;

console.log(data);
console.log(Object.keys(data));