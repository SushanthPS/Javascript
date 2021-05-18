var items = [2, 4, 5, 3, 6, 8];


var isEven = function (ele, index) {
    return ele % 2 == 0 && index % 2 == 0;
}

console.log(items.filter(isEven));