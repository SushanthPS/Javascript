function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var arr = newInput[i * 2].split(" ").map(Number);
        var count = 0;
        var flag = false;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] % 2 == 1)
                count++;
            else
                count = 0;
            if (count == 3) {
                flag = true;
                break;
            }
        }
        if (flag)
            console.log("Misbehave!");
        else
            console.log("Behave!");

    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
6
1 3 3 4 5 6
5
1 2 3 4 5`);
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