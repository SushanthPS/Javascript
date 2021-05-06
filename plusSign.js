function runProgram(input) {
    var n = Number(input);
    var rows = n * 2 + 1;

    for (var i = 1; i <= rows; i++) {
        var result = "";
        for (var space = 1; space <= n; space++) {
            if (i == n + 1)
                result += "**";
            else
                result += " ";
        }
        result += "*";
        console.log(result);
    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`3`);
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