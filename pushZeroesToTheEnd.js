function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var arr = newInput[i * 2].split(" ").map(Number);
        var count = 0;
        var ans = [];
        for (var j = 0; j < arr.length; j++)
            if (arr[j] == 0)
                count++;
            else
                ans.push(arr[j]);

        for (var j = 1; j <= count; j++)
            ans.push(0);

        console.log(ans.join(" "));
    }



}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
5
0 1 2 3 0
5
0 0 1 2 3`);
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