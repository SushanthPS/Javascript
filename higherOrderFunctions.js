var items = [1, 2, 3, 4, 5, 6];

var product = function (ele, prod) {
    return prod * ele;
}

var printDouble = function (ele) {
    return (ele * 2);
}

var printSquare = function (ele) {
    console.log(ele ** 2);
}

var isOdd = function (ele) {
    return ele % 2 == 1;
}

var sum = function (ele, ac) {
    return ele + ac;
}

var cube = function (ele) {
    return ele ** 3;
}

var divBy3 = function (ele) {
    return ele % 3 == 0;
}

//1
items.forEach(printSquare);
console.log();

//2
console.log(items.map(printDouble));
console.log();

//3
console.log(items.filter(isOdd));
console.log();

//4
console.log(items.reduce(product));
console.log();

//5
console.log(items.filter(isOdd).reduce(sum));
console.log();

//6
console.log(items.filter(divBy3).map(cube).reduce(sum));
console.log();