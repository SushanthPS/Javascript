var items = ["Apple", "Windows", "UBUNTU"];

var toLower = function (ele) {
    return ele.toLowerCase();
}


var output = items.map(toLower);
console.log(output.join("-"));