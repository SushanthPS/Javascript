function removeDuplicates(str) {
    var result = str[0];

    for (var i = 1; i < str.length; i++)
        if (str[i] != result[result.length - 1])
            result += str[i];

    console.log(result);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++)
        removeDuplicates(newInput[i]);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`3
abb
aaab
ababa`);
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