var gate = "AND";
var powersts = false;
var a = 0;
var b = 0;
var output;
var n = 1;
var pwr = document.getElementById("power");
var gt = document.getElementById("gate");
var inputA = document.getElementById("input-switch-a");
var inputB = document.getElementById("input-switch-b");
var textA = document.getElementById("input-text-a");
var textB = document.getElementById("input-text-b");
var ledA = document.getElementById("input-led-a");
var ledB = document.getElementById("input-led-b");
var ledY = document.getElementById("output-led");
var tableB = document.getElementById("table-col-b");

function checkgate(gatests) {
    pwr.src = "images/power-off.png";
    powersts = false;
    inputA.src = "images/switchoff.png";
    inputB.src = "images/switchoff.png";
    ledA.src = "images/off.png";
    ledB.src = "images/off.png";
    ledY.src = "images/off.png";
    a = 0;
    b = 0;
    output = 0;
    clr();


    switch (gatests) {
        case "AND":
            gt.src = "images/01.png";
            inputB.style.removeProperty('display');
            textB.style.removeProperty('display');
            ledB.style.removeProperty('display');
            tableB.style.removeProperty('display');
            textA.style.top = "315px";
            inputA.style.top = "310px";
            ledA.style.top = "263px";
            ledY.style.top = "330px";
            gate = gatests;
            break;
        case "OR":
            gt.src = "images/02.png";
            inputB.style.removeProperty('display');
            textB.style.removeProperty('display');
            ledB.style.removeProperty('display');
            tableB.style.removeProperty('display');
            textA.style.top = "315px";
            inputA.style.top = "310px";
            ledA.style.top = "264px";
            ledY.style.top = "331px";
            gate = gatests;
            break;
        case "NOT":
            gt.src = "images/03.png";
            inputB.style.display = "none";
            textB.style.display = "none";
            ledB.style.display = "none";
            tableB.style.display = "none";
            textA.style.top = "368px";
            inputA.style.top = "363px";
            ledA.style.top = "315px";
            ledY.style.top = "347px";
            gate = gatests;
            break;
        case "NAND":
            gt.src = "images/04.png";
            inputB.style.removeProperty('display');
            textB.style.removeProperty('display');
            ledB.style.removeProperty('display');
            tableB.style.removeProperty('display');
            textA.style.top = "315px";
            inputA.style.top = "310px";
            ledA.style.top = "263px";
            ledY.style.top = "330px";
            gate = gatests;
            break;
        case "NOR":
            gt.src = "images/05.png";
            inputB.style.removeProperty('display');
            textB.style.removeProperty('display');
            ledB.style.removeProperty('display');
            tableB.style.removeProperty('display');
            textA.style.top = "315px";
            inputA.style.top = "310px";
            ledA.style.top = "264px";
            ledY.style.top = "331px";
            gate = gatests;
            break;
        case "XOR":
            gt.src = "images/06.png";
            inputB.style.removeProperty('display');
            textB.style.removeProperty('display');
            ledB.style.removeProperty('display');
            tableB.style.removeProperty('display');
            textA.style.top = "315px";
            inputA.style.top = "310px";
            ledA.style.top = "264px";
            ledY.style.top = "331px";
            gate = gatests;
            break;
        case "XNOR":
            gt.src = "images/07.png";
            inputB.style.removeProperty('display');
            textB.style.removeProperty('display');
            ledB.style.removeProperty('display');
            tableB.style.removeProperty('display');
            textA.style.top = "315px";
            inputA.style.top = "310px";
            ledA.style.top = "264px";
            ledY.style.top = "331px";
            gate = gatests;
            break;
    }
}



//Power Supply
function powerkey() {

    if (pwr.src.match("images/power-off.png")) {
        pwr.src = "images/power-on.png";
        powersts = true;
        switch (gate) {
            case "AND":
                andglow();
                break;
            case "OR":
                orglow();
                break;
            case "NOT":
                notglow();
                break;
            case "NAND":
                nandglow();
                break;
            case "NOR":
                norglow();
                break;
            case "XOR":
                xorglow();
                break;
            case "XNOR":
                xnorglow();
                break;
        }
        return powersts;
    }
}
//Power Supply


// Input
function input(key) {
    if (key == 1) {
        img = document.getElementById("input-switch-a");
        led = document.getElementById("input-led-a");
        if (powersts) {
            if (img.src.match("images/switchoff") && led.src.match("images/off.png")) {
                img.src = "images/switchon.png";
                led.src = "images/on.png";
                a = 1;
                switch (gate) {
                    case "AND":
                        andglow();
                        break;
                    case "OR":
                        orglow();
                        break;
                    case "NOT":
                        notglow();
                        break;
                    case "NAND":
                        nandglow();
                        break;
                    case "NOR":
                        norglow();
                        break;
                    case "XOR":
                        xorglow();
                        break;
                    case "XNOR":
                        xnorglow();
                        break;
                }
            } else {
                img.src = "images/switchoff.png";
                led.src = "images/off.png";
                a = 0;
                switch (gate) {
                    case "AND":
                        andglow();
                        break;
                    case "OR":
                        orglow();
                        break;
                    case "NOT":
                        notglow();
                        break;
                    case "NAND":
                        nandglow();
                        break;
                    case "NOR":
                        norglow();
                        break;
                    case "XOR":
                        xorglow();
                        break;
                    case "XNOR":
                        xnorglow();
                        break;
                }
            }
        } else {
            alert("Press Power Supply switch to connect power to the circuit.");
        }
    } else if (key == 2) {
        img = document.getElementById("input-switch-b");
        led = document.getElementById("input-led-b");
        if (powersts) {
            if (img.src.match("images/switchoff") && led.src.match("images/off.png")) {
                img.src = "images/switchon.png";
                led.src = "images/on.png";
                b = 1;
                switch (gate) {
                    case "AND":
                        andglow();
                        break;
                    case "OR":
                        orglow();
                        break;
                    case "NOT":
                        notglow();
                        break;
                    case "NAND":
                        nandglow();
                        break;
                    case "NOR":
                        norglow();
                        break;
                    case "XOR":
                        xorglow();
                        break;
                    case "XNOR":
                        xnorglow();
                        break;
                }
            } else {
                img.src = "images/switchoff.png";
                led.src = "images/off.png";
                b = 0;
                switch (gate) {
                    case "AND":
                        andglow();
                        break;
                    case "OR":
                        orglow();
                        break;
                    case "NOT":
                        notglow();
                        break;
                    case "NAND":
                        nandglow();
                        break;
                    case "NOR":
                        norglow();
                        break;
                    case "XOR":
                        xorglow();
                        break;
                    case "XNOR":
                        xnorglow();
                        break;
                }
            }
        } else {
            alert("Press Power Supply switch to connect power to the circuit.");
        }
    }
}
//Input

// AND Gate
function andglow() {
    var outled = document.getElementById("output-led");
    if (a == 0 && b == 0) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 0 && b == 1) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 1 && b == 0) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 1 && b == 1) {
        outled.src = "images/on.png";
        output = 1;
    }
}
// AND Gate

// OR Gate
function orglow() {
    var outled = document.getElementById("output-led");
    if (a == 0 && b == 0) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 0 && b == 1) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 1 && b == 0) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 1 && b == 1) {
        outled.src = "images/on.png";
        output = 1;
    }
}
// OR Gate

// NOT Gate
function notglow() {
    var outled = document.getElementById("output-led");
    if (a == 0) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 1) {
        outled.src = "images/off.png";
        output = 0;
    }
}
// NOT Gate

// NAND Gate
function nandglow() {
    var outled = document.getElementById("output-led");
    if (a == 0 && b == 0) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 0 && b == 1) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 1 && b == 0) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 1 && b == 1) {
        outled.src = "images/off.png";
        output = 0;
    }
}
// NAND Gate

// NOR Gate
function norglow() {
    var outled = document.getElementById("output-led");
    if (a == 0 && b == 0) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 0 && b == 1) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 1 && b == 0) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 1 && b == 1) {
        outled.src = "images/off.png";
        output = 0;
    }
}
// NOR Gate

// XOR Gate
function xorglow() {
    var outled = document.getElementById("output-led");
    if (a == 0 && b == 0) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 0 && b == 1) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 1 && b == 0) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 1 && b == 1) {
        outled.src = "images/off.png";
        output = 0;
    }
}
// XOR Gate

// XNOR Gate
function xnorglow() {
    var outled = document.getElementById("output-led");
    if (a == 0 && b == 0) {
        outled.src = "images/on.png";
        output = 1;
    } else if (a == 0 && b == 1) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 1 && b == 0) {
        outled.src = "images/off.png";
        output = 0;
    } else if (a == 1 && b == 1) {
        outled.src = "images/on.png";
        output = 1;
    }
}
// XNOR Gate

// Add Data
function addData() {
    if (powersts) {
        var table = document.getElementById("truth-table");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);


        if (gate == "NOT") {
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = n++;
            cell2.innerHTML = a;
            cell3.innerHTML = output;
        } else {
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = n++;
            cell2.innerHTML = a;
            cell3.innerHTML = b;
            cell4.innerHTML = output;
        }
    } else {
        alert("Press Power Supply switch to connect power to the circuit.");
    }
}

// Clear Data
function clr() {
    var tbl = document.getElementById("truth-table");
    tbl.innerHTML = "";
    n = 1;
}