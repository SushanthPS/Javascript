function runProgram(input) {
    input = input.split("\n");
    for (var i = 0; i < input.length; i++) {
        if (isValid(input[i]))
            console.log("YES");
        else
            console.log("NO");
    }
}

function isValid(str) {
    //checks if the email starts with @ or .
    if (str[0] == '@' || str[0] == '.')
        return false;

    //checks if @ is present in the email
    if (str.indexOf('@') == -1)
        return false;

    //splitting the username and domain
    var arr = str.split("@");
    var name = arr[0];
    var domain = arr[1];

    //checks if domain starts with @ or .
    if (domain[0] == '@' || domain[0] == '.')
        return false;

    //checks if name has unwanted characters
    if (name.indexOf('(') != -1 || name.indexOf('*') != -1 || name.indexOf(')') != -1)
        return false;

    //checks for double dots in username
    for (var i = 0; i < name.length; i++)
        if (name[i] == '.' && name[i + 1] == '.')
            return false;

    //checking if domain is equal to 'com' , 'org' or 'net'
    var domainArr = domain.split(".");
    if (domainArr[domainArr.length - 1] != "com" && domainArr[domainArr.length - 1] != "org" && domainArr[domainArr.length - 1] != "net")
        return false;


    return true;
}



if (process.env.USERNAME === "getsu") {
    runProgram(`mysite@masaischool.com
my.name@masaischool.org
mysite@masai.school.net
masai.school.com
masai@.com
@masai.school.net
name@gmail.b
name@.org.org
.name@masaischool.org
masaischool()*@gmail.com
name..1234@yahoo.com`);
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