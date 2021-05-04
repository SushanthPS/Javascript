function runProgram(input) {
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    var c = newInput[1];
    var b = Number(newInput[2]);

    switch (c) {
        case '*':
            console.log(a * b);
            break;
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '/':
            console.log(Math.floor(a / b));
            break;
    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2 * 3`);
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