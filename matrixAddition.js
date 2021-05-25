m1 = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9]
];

m2 = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2]
];

for (var i = 0; i < m1.length; i++) {
    var result = "";
    for (var j = 0; j < m1[i].length; j++) {
        result += m1[i][j] + m2[i][j] + " ";
    }
    console.log(result);
}