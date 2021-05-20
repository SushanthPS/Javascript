function runProgram(input) {
    var input = input.split("\n");
    var data = input[0].split(" ").map(Number);
    var k = data[1];
    var n = data[0];
    var arr = input[1].split(" ").map(Number);
    k = k % n; // number of rotations required by size of array (reduces repetition)
    rotate(arr, k);


}

function rotate(arr, k) {
    var a = arr.slice(k, arr.length);
    var b = arr.slice(0, k);
    var result = a.join(" ") + " " + b.join(" ");
    console.log(result);

}


if (process.env.USERNAME === "getsu") {
    runProgram(`6 4
1 2 5 4 0 6`);
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