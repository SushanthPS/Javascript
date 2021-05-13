function createTriangle(items) {
    var s1 = items[0];
    var s2 = items[1];
    var s3 = items[2];

    if (s1 + s2 > s3 && s1 + s3 > s2 && s3 + s2 > s1)
        console.log("Yes");
    else
        console.log("No");


}



function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var arr = newInput[i].split(" ").map(Number);
        createTriangle(arr);
    }


}
if (process.env.USERNAME === "getsu") {
    runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2`);
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