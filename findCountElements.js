var items = ['A', 'B', 'A', 'C', 'D', 'C'];

var data = {};

for (var i = 0; i < items.length; i++)
    if (data[items[i]] != undefined)
        data[items[i]] += 1;
    else
        data[items[i]] = 1;

console.log(data);