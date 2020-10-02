var alldata = {
    1: [12, 23, 94, 437, 30],
    2: [121, 223, 394, 47, 230]
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var data;

var res = document.getElementById("res");

function getdata() {
    data = alldata[getRndInteger(1, 2)];
    res.innerHTML = data[4];
}