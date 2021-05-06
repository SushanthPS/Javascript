function runProgram(input) {
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    var b = Number(newInput[1]);
    var result = "";

    for (var i = a; i <= b; i++) {
        var isPrime = true;
        if (i == 1 || i % 2 == 0 && i != 2)
            isPrime = false;
        else {
            for (var j = 3; j * j <= i; j += 2)
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
        }
        if (isPrime)
            result += i + " ";

    }
    console.log(result);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2 5`);
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