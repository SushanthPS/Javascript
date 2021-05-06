var isPrime = true;
var n = 17;


if (n == 1 || n % 2 == 0 && n != 2)
    isPrime = false;
else {
    for (var i = 3; i * i <= n; i += 2)
        if (n % i == 0) {
            isPrime = false;
            break;
        }

}

if (isPrime)
    console.log("Prime");
else
    console.log("Not Prime");