function runProgram(input) {
    var newInput = input.split("\n");
    var cost = newInput[0].split(" ").map(Number);
    var number = newInput[1].split(" ").map(Number);
    var sum = 0;

    for (var i = 0; i < cost.length; i++)
        sum += (cost[i] * number[i]);

    if (sum > 150000)
        console.log("Not Possible");
    else
        console.log("Possible");



}
if (process.env.USERNAME === "getsu") {
    runProgram(`10000 20000 15000 5000
2 3 4 3`);
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