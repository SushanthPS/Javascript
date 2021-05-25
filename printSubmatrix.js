var data = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];

var r1 = 1;
var r2 = 2;
var c1 = 1;
var c2 = 2;

for (var i = r1; i <= r2; i++) {
    var result = "";
    for (var j = c1; j <= c2; j++)
        result += data[i][j] + " ";
    console.log(result);
}