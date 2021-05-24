function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var a = 1; a <= t; a++) {
        var arr = newInput[a * 2].split(" ").map(Number);
        var count = 0;
        for (var i = 0; i < arr.length - 1; i++)
            if (arr[i] > arr[i + 1])
                count++;

        console.log(count);
    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
5 
1 4 2 3 5
5
5 4 3 2 1`);
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