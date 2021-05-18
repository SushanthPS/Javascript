var items = ["apple", "windows", "ubuntu", "cola", "system"];

var isVowel = function (ele) {
    return ele.charAt(0) == 'a' || ele.charAt(ele.length - 1) == 'a';
}

console.log(items.filter(isVowel));