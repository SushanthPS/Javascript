function checkString(str) {
    var flagChar = false;
    var flagNum = false;
    for (var i = 0; i < str.length; i++)
        if (str[i] >= 0 && str[i] <= 9)
            flagNum = true;
        else
            flagChar = true;

    if (flagChar && flagNum)
        console.log("alphanumeric");
    else if (flagChar)
        console.log("chars");
    else
        console.log("numbers");
}



function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        checkString(newInput[i * 2]);
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
5
ab2cd
5
acfgh
3
123`);
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