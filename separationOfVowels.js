var isVowel = function (ele) {
    if (ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u')
        return true;
    return false;
}

function runProgram(input) {
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (var i = 1; i <= t; i++) {
        var str = newInput[i * 2];
        var vowels = "";
        var consonants = "";
        for (var j = 0; j < str.length; j++)
            if (isVowel(str[j]))
                vowels += str[j];
            else
                consonants += str[j];

        console.log(vowels + consonants);

    }

}


if (process.env.USERNAME === "getsu") {
    runProgram(`1
6
rutwik`);
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