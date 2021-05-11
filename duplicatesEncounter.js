function runProgram(input) {
    var n = input.length;
    var result = "";
    var count = 0;
    var temp = input[0];

    for (var i = 0; i < n; i++) {
        if (input[i] == temp)
            count++;
        else {
            if (count % 2 != 0)
                result += temp;
            temp = input[i];
            count = 1;
        }

    }
    if (count % 2 != 0)
        result += temp;


    if (result == "")
        console.log("Empty String");
    else
        console.log(result);



}
if (process.env.USERNAME === "getsu") {
    runProgram(`aaabccddd`);
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