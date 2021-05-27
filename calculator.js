var calc = {
    a: 4,
    b: 8,
    addition: function () {
        console.log(this.a + this.b);
    },
    subtraction: function () {
        console.log(this.b - this.a);
    },
    multiplication: function () {
        console.log(this.a * this.b);
    },
    division: function () {
        console.log(this.b / this.a);
    }
}

calc.addition();
calc.subtraction();
calc.multiplication();
calc.division();