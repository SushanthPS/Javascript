function sums(ac, el) {
    return ac + el;
}

var obj = {
    marks: [10, 20, 30, 5, 15],
    names: ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"],
    average: function () {
        var sum = this.marks.reduce(sums);
        return sum / this.marks.length;
    },
    minimum: function () {
        var index = 0;
        var min = this.marks[0];
        for (var i = 0; i < this.marks.length; i++)
            if (this.marks[i] < min) {
                min = this.marks[i];
                index = i;
            }

        return this.names[index];
    },
    maximum: function () {
        var index = 0;
        var max = this.marks[0];
        for (var i = 0; i < this.marks.length; i++)
            if (this.marks[i] > max) {
                max = this.marks[i];
                index = i;
            }

        return this.names[index];
    }
}

console.log(obj.average());
console.log(obj.minimum());
console.log(obj.maximum());