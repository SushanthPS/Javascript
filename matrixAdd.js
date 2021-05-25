function isMatrixPossible(r1, r2, c1, c2) {

    if (r1 == r2 && c1 == c2)
        return true;
    else
        return false;
}

function stringToArray(ele) {
    return ele.split(" ").map(Number);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var rc = newInput[0].split(" ").map(Number);
    var r1 = rc[0];
    var c1 = rc[1];
    var r2 = rc[2];
    var c2 = rc[3];
    if (!isMatrixPossible(r1, r2, c1, c2))
        console.log("-1");
    else {
        var arr1_lines = newInput.slice(1, r1 + 1);
        var arr2_lines = newInput.slice(r2 + 1);

        var data1 = arr1_lines.map(stringToArray);
        var data2 = arr2_lines.map(stringToArray);

        for (var i = 0; i < data1.length; i++) {
            var result = "";
            for (var j = 0; j < data1[i].length; j++)
                result += data1[i][j] + data2[i][j] + " ";
            console.log(result);
        }

    }


}
if (process.env.USERNAME === "getsu") {
    runProgram(`2 2 2 2
1 2
3 4
2 3
4 5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}