var n = 6;

for (var i = 1; i <= n; i++) {
    var result = "";
    for (var space = 1; space <= n - i; space++)
        result += " ";
    for (var j = 1; j <= i; j++)
        result += "* ";
    console.log(result);
}