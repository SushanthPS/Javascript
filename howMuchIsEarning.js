function communicatedBuildings(items) {
    var comms = 1;
    var currentHeight = items[0];
    for (var i = 1; i < items.length; i++)
        if (items[i] > currentHeight) {
            comms++;
            currentHeight = items[i];
        }
    return comms;

}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t * 2; i += 2) {
        var newInput2 = newInput[i].split(" ").map(Number);
        var r = Number(newInput2[1]);
        var arr = newInput[i + 1].split(" ").map(Number);
        console.log(communicatedBuildings(arr) * r);

    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`);
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