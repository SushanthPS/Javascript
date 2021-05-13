function tables(n) {
    var ans = "";
    for (var i = 1; i <= 10; i++)
        ans += n * i + " ";

    console.log(ans);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++)
        tables(newInput[i]);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
2
3`);
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