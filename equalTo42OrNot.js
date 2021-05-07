function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].split(" ").map(Number);
    var n = data.length;
    var flag = false;

    for (var i = 0; i < n; i++)
        if (data[i] == 42) {
            flag = true;
            break;
        }

    if (flag)
        console.log("Yes");
    else
        console.log("No");




}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
3 7 0 9 8`);
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