function runProgram(input) {
    var newInput = input.split(" ");
    var L = Number(newInput[0]);
    var R = Number(newInput[1]);

    var result = "";

    while (L <= R) {
        result += L + " ";
        L *= 2;
    }
    console.log(result);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 100`);
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