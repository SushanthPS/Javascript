var data = {
    arr: [],
    addData: function (name, age) {
        this.arr.push({
            name: name,
            age: age
        });
    },
    printAge: function () {
        for (var i = 0; i < this.arr.length; i++)
            if (this.arr[i].age > 30)
                console.log(this.arr[i].name);
    }

};

data.addData("Nrupul", 32);
data.addData("Prateek", 30);
data.addData("Aman", 26);
data.addData("Ankur", 34);
data.addData("Albert", 28);
data.addData("Yogesh", 44);
data.addData("Sidharth", 22);


data.printAge();