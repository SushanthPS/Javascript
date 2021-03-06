function arrayProduct(items) {
    var prod = 1;
    for (var i = 0; i < items.length; i++)
        prod *= items[i];

    return prod;
}

function arrayProdDivide(items, product) {
    var answer = [];
    for (var i = 0; i < items.length; i++)
        answer.push(product / items[i]);

    return answer;
}

function printAnswer(items) {
    var result = items.join(" ");
    console.log(result);
}


function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var arr = newInput[i * 2].split(" ").map(Number);
        var product = arrayProduct(arr);
        var arr2 = arrayProdDivide(arr, product);
        printAnswer(arr2);
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
5
1 2 3 4 5
3
3 2 7`);
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