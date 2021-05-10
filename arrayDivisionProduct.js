function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var n = data.length;
    var product = 1;

    for (var i = 0; i < n; i += 2)
        product *= (data[i] + data[i + 1]);

    console.log(product);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`6
1 2 3 4 5 6`);
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