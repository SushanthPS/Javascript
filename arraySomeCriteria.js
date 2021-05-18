var items = [2, 4, 5, 3, 6, 8];

var evenIndex = function (ele, count) {
    if (count % 2 == 0)
        return ele;
    count++;
}

var isEven = function (ele) {
    return ele % 2 == 0;
}

console.log(items.filter(evenIndex).filter(isEven));