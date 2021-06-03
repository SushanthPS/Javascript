function rgbToHex(arr) {
    var obj = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    };

    var result = "";
    var n1;
    var n2;

    for (var i = 0; i < arr.length; i++) {

        n1 = Math.floor(arr[i] / 16);
        n2 = arr[i] % 16;

        if (n1 >= 10)
            result += obj[n1];
        else
            result += n1;


        if (n2 >= 10)
            result += obj[n2];
        else
            result += n2;
    }

    console.log(result);

}

rgbToHex([45, 0, 210]);
rgbToHex([0, 255, 0]);
rgbToHex([12, 24, 36]);