function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var sum = 0;

    for (var i = 0; i < data.length; i++)
        sum += data[i];

    if (sum > 100)
        console.log("Greater");
    else
        console.log("Lesser");



}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
21 24 2 54 8`);
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