var data = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];


// 0,0   0,1   0,2
// 1,0   1,1   1,2
// 2,0   2,1   2,2

var sum = 0;
for (var i = 0; i < data.length; i++)
    for (var j = 0; j < data[i].length; j++)
        if (i <= j)
            sum += data[i][j];

console.log(sum);