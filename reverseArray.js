function runProgram(input) {
    var newInput = input.split("\n");
    newInput[1] = newInput[1].trim();
    var data = newInput[1].split(" ").map(Number);
    var n = data.length;
    var result = "";

    for (var i = 0; i < n; i++)
        result = data[i] + " " + result;

    console.log(result);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`11
1 1 1 1 1 1 1 0 0 -4 -31 `);
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