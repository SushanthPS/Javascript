var n = 8;

for (var i = 1; i <= n; i++) {
    var result = "";
    for (var space = 1; space < n; space++)
        if (i == n)
            result += "* ";
        else
            result += "  ";
    result += "*";
    console.log(result);
}