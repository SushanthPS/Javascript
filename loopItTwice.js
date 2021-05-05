function runProgram(input) {
    var newInput = input.split(" ");
    var L = Number(newInput[0]);
    var R = Number(newInput[1]);
    var result = "";
    for (var i = L; i <= R; i += 2)
        result += i + " ";

    console.log(result);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 10`);
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