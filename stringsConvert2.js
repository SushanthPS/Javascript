function runProgram(input) {
    var input = input.split("\n");
    var data = input[1];
    var n = Number(input[0]);
    var result = "";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var m = upperCase.length;


    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (data[i] == upperCase[j]) {
                result += lowerCase[j];
                break;
            } else if (data[i] == lowerCase[j]) {
                result += upperCase[j];
                break;
            }
        }


    }
    console.log(result);
}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
aBbcd`);
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