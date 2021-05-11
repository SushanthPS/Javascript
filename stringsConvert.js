function runProgram(input) {
    var input = input.split("\n");
    var data = input[1];
    var n = Number(input[0]);
    var result = "";

    for (var i = 0; i < n; i++)
        if (data[i] >= 'A' && data[i] <= 'Z')
            result += data[i].toLowerCase();
        else
            result += data[i].toUpperCase();

    console.log(result);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
aBbcd`);
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