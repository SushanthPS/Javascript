function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var evenSum = 0;
    var oddSum = 0;

    for (var i = 0; i < data.length; i++) {
        if (data[i] % 2 == 0)
            evenSum += data[i];
        else
            oddSum += data[i];
    }
    console.log((2 * evenSum) + (3 * oddSum));



}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
2 5 0 9`);
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