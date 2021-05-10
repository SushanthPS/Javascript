function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var n = data.length;
    var sum = 0;

    for (var i = 0; i < n; i++)
        if (i % 2 == 0)
            sum += (data[i] * 2);
        else
            sum += (data[i] * 3);

    console.log(sum);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
1 2 3 4 5`);
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