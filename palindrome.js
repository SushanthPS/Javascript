function runProgram(input) {
    var n = Number(input);
    var temp = n;
    var ans = 0;
    var digit = 0;
    while (temp != 0) {
        digit = temp % 10;
        ans = ans * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    if (n == ans)
        console.log("Yes");
    else
        console.log("No");
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1221`);
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