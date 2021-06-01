var data = {
    name: 'Sushanth',
    marks: [],
    addMarks: function (sub, marks) {
        this.marks.push({
            subject: sub,
            marks: marks
        });
    },
    lowest: function () {
        var marksData = this.marks;
        marksData.sort(function (a, b) {
            return a.marks - b.marks;
        })
        return marksData[0];

    },
    highest: function () {
        var marksData = this.marks;
        marksData.sort(function (a, b) {
            return b.marks - a.marks;
        })
        return marksData[0];
    },
    total: function () {
        var total = this.marks.reduce(function (a, b) {
            return a + b.marks;
        }, 0);
        return total;
    }

};

data.addMarks("Maths", 90);
data.addMarks("English", 88);
data.addMarks("Geography", 77);
data.addMarks("Hindi", 60);
data.addMarks("Science", 98);

console.log(data.lowest());
console.log(data.highest());
console.log(data.total());