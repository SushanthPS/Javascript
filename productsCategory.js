var obj = {
    arr: [],
    addInput: function (n, c, p) {
        this.arr.push({
            Name: n,
            Category: c,
            Price: p
        })
    }
};

function LeastPricedObjects(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i].Category] == undefined)
            obj[arr[i].Category] = [arr[i].Name, arr[i].Price];

        else if (arr[i].Price < obj[arr[i].Category][1]) {
            obj[arr[i].Category][1] = arr[i].Price;
            obj[arr[i].Category][0] = arr[i].Name;
        }
    }

    for (key in obj) {
        console.log(key + ": " + obj[key][0]);
    }

}

obj.addInput("OnePlus", "Electronics", "29000");
obj.addInput("Coffee", "Grocery", "400");
obj.addInput("Pen", "Office", "30");
obj.addInput("Book", "Office", "60");
obj.addInput("Rice", "Grocery", "100");
obj.addInput("Earphones", "Electronics", "1000");


LeastPricedObjects(obj.arr);