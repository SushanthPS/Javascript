function runProgram(input) {
    var n = Number(input);

    for (var i = 1; i <= n; i++) {
        result = "";
        for (var space = 1; space <= n - i; space++)
            result += "  ";
        for (var j = 1; j <= i; j++)
            result += "* ";
        console.log(result);
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`6`);
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