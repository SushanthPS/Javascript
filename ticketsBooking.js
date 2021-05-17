function runProgram(input) {
    var newInput = input.split("\n");
    var ticketCost = newInput[0].split(" ").map(Number);
    var numberOfTickets = newInput[1].split(" ").map(Number);
    var sum = 0;
    for (var i = 0; i < 3; i++)
        sum += (ticketCost[i] * numberOfTickets[i]);

    console.log(sum);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`1200 1400 2000
5 6 2`);
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