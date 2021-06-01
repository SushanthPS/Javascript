var obj = {
    data: [],
    addData: function (n, q, p) {
        this.data.push({
            name: n,
            quantity: q,
            price: p
        });
    },
    total: function () {
        var sum = 0;
        for (var i = 0; i < this.data.length; i++)
            sum += (this.data[i].quantity * this.data[i].price);
        console.log(sum);
    }
};

obj.addData("Rice", 2, 60);
obj.addData("Dal", 3, 50);
obj.addData("Salt", 1, 20);


obj.total();