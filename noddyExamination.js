function maxScore(items, x) {
    var score = 0;
    var skip = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i] <= x)
            score++;
        else
            skip++;

        if (skip >= 2)
            return score;
    }
    return score;
}

function runProgram(input) {

    var newInput = input.split("\n");
    var newInput2 = newInput[0].split(" ").map(Number);
    var score = newInput2[1];
    var arr = newInput[1].split(" ").map(Number);
    console.log(maxScore(arr, score));

}
if (process.env.USERNAME === "getsu") {
    runProgram(`7 6
4 3 7 6 7 2 2`);
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