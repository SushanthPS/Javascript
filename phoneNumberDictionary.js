var data = {
    Ajay: 21345,
    RamDas: 32146,
    Rohith: 23522,
    Nihal: 98743,
    findUser: function (ele) {
        if (data[ele] == undefined)
            console.log("No user found");
        else
            console.log(data[ele]);
    }
};

data.findUser('Nihal');
data.findUser('Mani');