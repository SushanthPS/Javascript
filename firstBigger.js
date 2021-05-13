function largerElements(items, ele) {
    var arr = [];
    for (var i = 0; i < items.length; i++)
        if (items[i] > ele)
            arr.push(items[i]);

    return arr;
}

function smallestElement(items) {
    if (items.length == 0)
        return -1;
    var small = items[0];
    for (var i = 0; i < items.length; i++)
        if (items[i] < small)
            small = items[i];

    return small;

}


function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].split(" ").map(Number);
    var t = Number(newInput[2]);
    for (var i = 1; i <= t; i++) {
        var element = Number(newInput[i + 2]);
        var arr2 = largerElements(arr, element);
        console.log(smallestElement(arr2));
    }


}
if (process.env.USERNAME === "getsu") {
    runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
65
15`);
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