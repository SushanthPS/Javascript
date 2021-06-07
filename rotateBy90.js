function stringToArray(row) {
    return row.split(" ").map(Number);
}

function rotateArray(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var result = "";
        for (var j = 0; j < arr[i].length; j++)
            result += arr[j][i] + " ";

        console.log(result);
    }
}


function runProgram(input) {
    var newInput = input.split("\n");
    var arr_lines = newInput.slice(1);
    var arr = arr_lines.map(stringToArray);
    rotateArray(arr);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);
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