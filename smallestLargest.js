function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var n = data.length;

    var small = data[0];
    var large = data[0];

    for (var i = 1; i < n; i++) {
        if (data[i] < small)
            small = data[i];
        if (data[i] > large)
            large = data[i];

    }
    console.log(small);
    console.log(large);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
-2 0 8 4`);
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