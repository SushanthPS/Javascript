function runProgram(input) {
    var n = input.length;
    var result = "";
    var temp = input[0];

    for (var i = 1; i < n; i++)
        if (input[i] != temp) {
            result += temp;
            temp = input[i];
        }

    result += temp;

    console.log(result);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`aaabccdddee`);
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