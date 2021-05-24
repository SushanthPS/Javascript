function runProgram(input) {
    var newInput = input.split(" ").map(Number);
    var a = newInput[0];
    var b = newInput[1];
    var gcd = 1;
    for (var i = 2; i <= a; i++)
        if (a % i == 0 && b % i == 0)
            gcd = i;

    console.log(gcd);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`51 68`);
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