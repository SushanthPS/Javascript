function runProgram(input) {
    input = input.split(" ").map(Number);
    var n = input.length;
    var N = n + 1;

    var sum = 0;

    for (var i = 0; i < n; i++)
        sum += input[i];

    var actualSum = N * (N + 1) / 2;

    console.log(actualSum - sum);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 5 1 3`);
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