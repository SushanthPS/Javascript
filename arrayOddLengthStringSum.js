var items = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var sum = function (ac, ele) {
    return ele + ac;
}

var isOdd = function (ele) {
    return ele % 2 == 1;
}

var lengths = function (ele) {
    return ele.length;
}

console.log(items.map(lengths).filter(isOdd).reduce(sum));