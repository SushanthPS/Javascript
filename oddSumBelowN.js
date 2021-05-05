function runProgram(input) {
    var n = Number(input);
    var sum = 0;
    while (n > 0) {
        if (n % 2 == 1)
            sum += n;
        n--;
    }
    console.log(sum);
}


if (process.env.USERNAME === "getsu") {
    runProgram(`7`);
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