var obj = {
    side1: 3,
    side2: 4,
    hypotenuse: function () {
        return Math.sqrt(this.side1 ** 2 + this.side2 ** 2);
    }
}

console.log(obj.hypotenuse());