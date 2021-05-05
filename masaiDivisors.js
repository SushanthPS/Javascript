function runProgram(input) {
    var newInput = input.split(" ");
    var left = Number(newInput[0]);
    var right = Number(newInput[1]);
    var k = Number(newInput[2]);

    var count = 0;

    while (left <= right) {
        if (left % k == 0)
            count++;
        left++;
    }
    console.log(count);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`1 10 1`);
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