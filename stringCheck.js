function runProgram(input) {
    var input = input.split("\n");
    var data = input[1];
    var n = Number(input[0]);
    var flagChar = false;
    var flagNum = false;

    for (var i = 0; i < n; i++)
        if (data[i] >= 0 && data[i] <= 9)
            flagNum = true;
        else
            flagChar = true;

    if (flagChar && flagNum)
        console.log("alphanumeric");
    else if (flagChar)
        console.log("chars");
    else
        console.log("numbers");



}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
ab2cd`);
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