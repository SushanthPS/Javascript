function binToDec(n) {
    var sum = 0;
    var power = 0;
    var digit;
    while (n != 0) {
        digit = n % 10;
        sum += (digit * 2 ** power);
        power++;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(binToDec(10101));
console.log(binToDec(1001001));