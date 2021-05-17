function runProgram(input) {
    var newInput = input.split("\n");
    var newZealand = newInput[0].split(" ").map(Number);
    var England = newInput[1].split(" ").map(Number);

    for (var i = 0; i < 3; i++) {
        if (newZealand[i] > England[i]) {
            console.log("New Zealand");
            break;
        } else if (England[i] > newZealand[i]) {
            console.log("England");
            break;
        }
    }




}
if (process.env.USERNAME === "getsu") {
    runProgram(`241 15 21
241 15 26`);
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