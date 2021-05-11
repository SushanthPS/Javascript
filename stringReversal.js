function runProgram(input) {
    var n = input.length;
    var result = "";

    for (var i = n - 1; i >= 0; i--)
        result += input[i];

    console.log(result);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`masaischool`);
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