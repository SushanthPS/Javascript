function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var arr = newInput[i * 2].split(" ").map(Number);
        var flag = false;
        for (var j = 0; j < arr.length - 1; j++) {
            for (var k = j + 1; k < arr.length; k++)
                if (arr[j] == arr[k]) {
                    flag = true;
                    false;
                }

        }
        if (flag)
            console.log("Loop");
        else
            console.log("No Loop");

    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
5
1 2 3 4 5
6
1 2 3 4 6 6`);
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