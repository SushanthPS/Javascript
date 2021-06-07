function findSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        for (var j = 0; j < arr[i].length; j++)
            if (arr[i][j] % 3 == 0)
                sum += arr[i][j];
    return sum;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var rc = newInput[0].split(" ").map(Number);
    var arr = [];
    for (var i = 1; i <= rc[0]; i++)
        arr.push(newInput[i].split(" ").map(Number));

    console.log(findSum(arr));
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2 3
3 1 8
2 6 0`);
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