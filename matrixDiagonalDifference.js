var data = [
    [1, 2, 3, 4],
    [5, 6, 7, 6],
    [7, 8, 9, 9],
    [2, 4, 1, 3]
];

var r = data.length;
var primaryDiagonal = 0;
var secondaryDiagonal = 0;

for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
        if (i == j)
            primaryDiagonal += data[i][j];

        if (i + j == r - 1)
            secondaryDiagonal += data[i][j];

    }
}

console.log(Math.abs(primaryDiagonal - secondaryDiagonal));