function runProgram(input) {
    var n = Number(input);
    for (var i = 1; i <= 10; i++)
        console.log(`${n} x ${i} = ${n*i}`)
}


if (process.env.USERNAME === "getsu") {
    runProgram(`2`);
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