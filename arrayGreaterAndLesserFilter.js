var obj = {
    data: [1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems: function (ele) {
        var arr = [];
        for (var i = 0; i < this.data.length; i++)
            if (this.data[i] < ele)
                arr.push(this.data[i]);

        console.log(arr);
    },
    greaterThanItems: function (ele) {
        var arr = [];
        for (var i = 0; i < this.data.length; i++)
            if (this.data[i] > ele)
                arr.push(this.data[i]);
        console.log(arr);
    }
}

obj.lessThanItems(4);
obj.greaterThanItems(6);