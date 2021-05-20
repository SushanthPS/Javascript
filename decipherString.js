function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var s = newInput[i * 2];
        console.log(decipher(s));
    }

}

function decipher(s) {
    var result = "";
    var i = 0;
    while (i < s.length) {
        var char = s[i];
        i++;
        var num = "";
        while (s[i] >= 0 && s[i] <= 9) {
            num += s[i];
            i++;
        }

        for (var j = 1; j <= num; j++)
            result += char;

    }
    return result;

}


if (process.env.USERNAME === "getsu") {
    runProgram(`2
6
a14b5c9
6
a2z13a2`);
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