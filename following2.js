function findIndex(items) {
    var index = -1;
    for (var i = 0; i < items.length; i++)
        if (items[i] == 2) {
            index = i;
            break;
        }

    return index;
}

function printAnswer(items, index) {
    if (index == -1 || index == items.length - 1)
        console.log("-1");
    else
        console.log(items[index + 1]);

}



function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);
    var ind = findIndex(arr);
    printAnswer(arr, ind);


}
if (process.env.USERNAME === "getsu") {
    runProgram(`5
3 4 2 0 1`);
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