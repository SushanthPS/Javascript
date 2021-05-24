function runProgram(input) {
    var newInput = input.split("\n");
    var newInput2 = newInput[0].split(" ").map(Number);
    var arr = newInput[1].split(" ").map(Number);
    var k = newInput2[1];
    var sum = 0;
    for (var i = 0; i < arr.length; i++)
        if (arr[i] <= k)
            sum += arr[i];

    console.log(sum);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`4 2
1 2 3 4`);
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