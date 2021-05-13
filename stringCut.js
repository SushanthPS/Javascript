function stringReversal(str) {
    var result = "";
    for (var i = 0; i < str.length; i++)
        result = str[i] + result;

    return result;

}

function stringCutting(str) {
    var n = str.length;
    var arr = [];
    var s1;
    var s2;
    var mid = "";

    if (n % 2 == 0) {
        s1 = str.substring(0, n / 2);
        s2 = str.substring(n / 2, n);
    } else {
        s1 = str.substring(0, n / 2);
        s2 = str.substring(n / 2 + 1, n);
        mid = str[Math.floor(n / 2)];
    }


    arr.push(s1);
    arr.push(mid);
    arr.push(s2);
    return arr;
}

function printResult(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++)
        result += stringReversal(arr[i]);

    console.log(result);

}


function runProgram(input) {
    var arr = stringCutting(input);
    printResult(arr);
}

if (process.env.USERNAME === "getsu") {
    runProgram(`jsdfnsgnlewnl`); //snfdsjglnweln
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