function runProgram(input) {
    var n = input.length;
    var count = 0;
    var result = "";
    var temp = input[0];

    for (var i = 0; i < n; i++)
        if (temp == input[i])
            count++;
        else {
            result += temp + count;
            temp = input[i];
            count = 1;
        }

    result += temp + count;

    console.log(result);

}
if (process.env.USERNAME === "getsu") {
    runProgram(`aaabbbbcc`);
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