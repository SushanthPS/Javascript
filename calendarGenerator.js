var data = {
    jan: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    feb: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    mar: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    apr: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    may: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    jun: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    jul: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    aug: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    sep: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    oct: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    nov: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
    dec: {
        sun: [],
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: []
    },
};

function isLeapYear(year) {
    if (year % 400 == 0)
        return true;
    if (year % 100 == 0)
        return false;
    if (year % 4 == 0)
        return true;
    return false;
}

//INPUT TO BE TAKEN
var firstDayOfYear = "fri";
var year = 2020;
var month = "feb";


//FINDING START COUNT OF FIRST DAY OF YEAR
var count;
var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
for (k in days)
    if (days[k] == firstDayOfYear) {
        count = k;
        break;
    }


//FINDING IF INPUT YEAR IS LEAP YEAR OR NOT
if (isLeapYear(year))
    var leap = 29;
else
    var leap = 28;



//FILLING IN CALENDER
for (key in data) {
    if (key == "jan" || key == "mar" || key == "may" || key == "jul" || key == "aug" || key == "oct" || key == "dec") {
        for (var i = 1; i <= 31; i++) {
            data[key][days[count]].push(i);
            count++;
            if (count == 7)
                count = 0;
        }
    } else if (key == "feb") {
        for (var i = 1; i <= leap; i++) {
            data[key][days[count]].push(i);
            count++;
            if (count == 7)
                count = 0;
        }

    } else {
        for (var i = 1; i <= 30; i++) {
            data[key][days[count]].push(i);
            count++;
            if (count == 7)
                count = 0;
        }

    }
}

//PRINTING THE MONTH FOR THE GIVEN INPUT
console.log("MONTH - " + month);
var result = "";
for (key in data[month]) {
    result = key + " - ";
    for (var i = 0; i < data[month][key].length; i++)
        result += data[month][key][i] + ", ";

    result = result.slice(0, result.length - 2);
    console.log(result);

}