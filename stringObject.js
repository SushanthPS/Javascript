function isVowel(ele) {
    if (ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u')
        return true;
    return false;
}

var obj = {
    item: "FireFox",
    vowelsCount: function () {
        var count = 0;
        for (var i = 0; i < this.item.length; i++)
            if (isVowel(this.item[i]))
                count++;
        return count;
    },
    reverse: function () {
        var result = "";
        for (var i = 0; i < this.item.length; i++)
            result = this.item[i] + result;

        return result;
    },
    changeCase: function () {
        var arr = this.item.split("");
        for (var i = 0; i < arr.length; i++)
            if (arr[i] >= 'A' && arr[i] <= 'Z')
                arr[i] = arr[i].toLowerCase();
            else
                arr[i] = arr[i].toUpperCase();

        return arr.join("");
    }
}

console.log(obj.vowelsCount());
console.log(obj.reverse());
console.log(obj.changeCase());