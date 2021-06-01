var data = {

};

var names = ["Nrupul", "Prateek", "Aman", "Nrupul", "Albert", "Albert", "Aman", "Prateek", "Nrupul"];
var skills = ["cmd", "js", "ds", "python", "js", "react", "algo", "html", "sql"];

for (var i = 0; i < names.length; i++)
    if (data[names[i]] == undefined) {
        data[names[i]] = [];
        data[names[i]].push(skills[i]);
    }
else
    data[names[i]].push(skills[i]);


for (key in data) {
    for (var i = 0; i < data[key].length; i++)
        if (data[key][i] == "ds")
            console.log(key);
}