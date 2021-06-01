var arr = [{
        grade: "V",
        students: [{
                name: "Nrupul",
                marks: [10, 20, 30]
            },
            {
                name: "Prateek",
                marks: [20, 30, 40]
            }
        ]
    },
    {
        grade: "VI",
        students: [{
                name: "Aman",
                marks: [10, 20, 30]
            },
            {
                name: "Albert",
                marks: [20, 30, 40]
            }
        ]
    },
    {
        grade: "VII",
        students: [{
                name: "Yogesh",
                marks: [10, 20, 30]
            },
            {
                name: "Sandhya",
                marks: [20, 30, 40]
            }
        ]
    }
];

var total = function (a, b) {
    return a + b;
}

for (var i = 0; i < arr.length; i++) {
    var result = arr[i].grade;
    var max = 0;
    for (var j = 0; j < arr[i].students.length; j++) {
        if (arr[i].students[j].marks.reduce(total) > max) {
            max = arr[i].students[j].marks.reduce(total);
            var name = arr[i].students[j].name;
        }
    }
    result += "-" + name + "-" + max;
    console.log(result);
}