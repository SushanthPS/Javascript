function runProgram(input) {
    var input = input.split("\n");
    var s1 = input[0];
    var s2 = input[1];
    var flag = false;

    for (var i = 0; i <= s1.length - s2.length; i++) {
        if (s1[i] == s2[0]) {
            for (var j = 0; j < s2.length; j++) {
                if (s1[i + j] != s2[j])
                    break;
                if (j == s2.length - 1)
                    flag = true;
            }

        }
    }
    if (flag)
        console.log("Yes");
    else
        console.log("No");



}
if (process.env.USERNAME === "getsu") {
    runProgram(`masai
sai`);
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