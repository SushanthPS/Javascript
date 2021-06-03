var arr = [
    [3, 9, 4, 1, 7, 2, 5, 8, 6],
    [1, 5, 7, 3, 8, 6, 2, 4, 9],
    [2, 8, 6, 9, 4, 5, 7, 1, 3],
    [5, 3, 8, 7, 9, 4, 6, 2, 1],
    [9, 4, 1, 2, 6, 3, 8, 7, 5],
    [7, 6, 2, 8, 5, 1, 3, 9, 4],
    [4, 1, 3, 5, 2, 8, 9, 6, 7],
    [6, 2, 9, 4, 3, 7, 1, 5, 8],
    [8, 7, 5, 6, 1, 9, 4, 3, 2]
];

var arr2 = [
    [3, 9, 4, 6, 7, 2, 5, 8, 1],
    [1, 5, 7, 3, 8, 6, 2, 4, 9],
    [2, 8, 1, 9, 4, 5, 7, 6, 3],
    [5, 3, 8, 7, 9, 4, 1, 2, 6],
    [9, 4, 6, 2, 1, 3, 8, 7, 5],
    [7, 6, 2, 8, 5, 1, 3, 9, 4],
    [4, 1, 3, 5, 2, 8, 9, 1, 7],
    [1, 2, 9, 4, 3, 7, 6, 5, 8],
    [8, 7, 5, 1, 6, 9, 4, 3, 2]
];



/*
0,0 0,1 0,2   0,3 0,4 0,5   0,6 0,7 0,8 
1,0 1,1 1,2   1,3 1,4 1,5   1,6 1,7 1,8
2,0 2,1 2,2   2,3 2,4 2,5   2,7 2,7 2,8

3,0 3,1 3,2   3,3 3,4 3,5   3,6 3,7 3,8
4,0 4,1 4,2   4,3 4,4 4,5   4,6 4,7 4,8
5,0 5,1 5,2   5,3 5,4 5,5   5,6 5,7 5,8

6,0 6,1 6,2   6,3 6,4 6,5   6,6 6,7 6,8
7,0 7,1 7,2   7,3 7,4 7,5   7,6 7,7 7,8
8,0 8,1 8,2   8,3 8,4 8,5   8,6 8,7 8,8
*/


function isRowValid(arr, r) {
    var set = new Set();
    for (var i = 0; i < 9; i++) {
        if (set.has(arr[r][i]))
            return false;
        set.add(arr[r][i]);
    }
    return true;
}

function isColumnValid(arr, c) {
    var set = new Set();
    for (var i = 0; i < 9; i++) {
        if (set.has(arr[i][c]))
            return false;
        set.add(arr[i][c]);
    }
    return true;
}

function isSubmatrixValid(arr, start_row, start_col) {
    var set = new Set();
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 3; j++) {
            if (set.has(arr[start_row + i][start_col + j]))
                return false;
            set.add(arr[start_row + i][start_col + j]);
        }
    return true;
}

function isSudokuValid(arr) {
    for (var i = 0; i < 9; i++) {
        if (!isRowValid(arr, i))
            return false;
        if (!isColumnValid(arr, i))
            return false;
    }
    for (var i = 0; i < 9; i += 3)
        for (var j = 0; j < 9; j += 3) {
            if (!isSubmatrixValid(arr, i, j))
                return false;
        }

    return true;
}



if (isSudokuValid(arr))
    console.log("CORRECT");
else
    console.log("WRONG");


if (isSudokuValid(arr2))
    console.log("CORRECT");
else
    console.log("WRONG");