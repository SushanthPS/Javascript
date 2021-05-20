var s = "A quick BROWN fox Jumps oveR a LazY DOg";

var removeSpace = function (str) {
    var result = "";
    var i = 0;
    while (i < str.length) {
        result += str[i];
        while (str[i] == ' ' && str[i + 1] == ' ')
            i++;
        i++;
    }
    return result;
}

var convertToLowerCase = function (str) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    var char;
    for (var i = 0; i < str.length; i++) {
        char = str[i];
        for (var j = 0; j < upper.length; j++)
            if (upper[j] == char) {
                char = lower[j];
                break;
            }
        result += char;

    }
    return (result);
}

var convertToUpperCase = function (s) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < lower.length; i++)
        if (lower[i] == s)
            return upper[i];
}



var snakeCase = function (str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ')
            result += '_';
        else
            result += str[i];
    }
    return result;
}

var hypenCase = function (str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ' ')
            result += '-';
        else
            result += str[i];
    }
    return result;
}


var camelCase = function (str) {
    var result = "";
    var char;
    for (var i = 0; i < str.length; i++) {
        char = str[i];
        if (char == ' ') {
            i++;
            char = convertToUpperCase(str[i]);
        }
        result += char;

    }
    return result;
}

console.log(camelCase(convertToLowerCase(removeSpace(s))));
console.log(snakeCase(convertToLowerCase(removeSpace(s))));
console.log(hypenCase(convertToLowerCase(removeSpace(s))));