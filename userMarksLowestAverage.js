var obj = {
    data: [],
    addData: function (n, m1, m2, m3) {
        this.data.push({
            Name: n,
            m1,
            m2,
            m3
        });
    },
    findLeastAverage: function () {
        var Leastavg = 100;
        var name;
        var avg;
        for (var i = 0; i < this.data.length; i++) {
            avg = (this.data[i].m1 + this.data[i].m2 + this.data[i].m3) / 3;
            if (avg < Leastavg) {
                Leastavg = avg;
                name = this.data[i].Name;
            }
        }
        console.log(name + ": " + Leastavg.toPrecision(4));
    }

};

obj.addData("Nrupul", 30, 40, 50);
obj.addData("Prateek", 20, 10, 10);
obj.addData("Yogesh", 40, 20, 20);
obj.addData("Aman", 10, 20, 40);
obj.addData("Albert", 25, 15, 25);

obj.findLeastAverage();