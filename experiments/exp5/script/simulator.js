var powersts = false;
var A = 0;
var B = 0;
var C = 0;
var D = 0;
var a, b, c, d, e, f, g;
var disp;
var n = 1;
var pwr = document.getElementById("power");
var inputA = document.getElementById("input-switch-a");
var inputB = document.getElementById("input-switch-b");
var inputC = document.getElementById("input-switch-c");
var inputD = document.getElementById("input-switch-d");
var ledA = document.getElementById("input-led-a");
var ledB = document.getElementById("input-led-b");
var ledC = document.getElementById("input-led-c");
var ledD = document.getElementById("input-led-d");
var output = document.getElementById("output");
var table = document.getElementById("truth-table");
var msg = document.getElementById("msg");

//Power Supply
function powerkey() {

    if (pwr.src.match("images/power-off.png")) {
        pwr.src = "images/power-on.png";
        powersts = true;
        glow();
        return powersts;
    }
}
//Power Supply

// Input
function input(key) {
    if (key == 1) {
        if (powersts) {
            if (inputA.src.match("images/switchoff") && ledA.src.match("images/off.png")) {
                inputA.src = "images/switchon.png";
                ledA.src = "images/on.png";
                A = 1;
            } else {
                inputA.src = "images/switchoff.png";
                ledA.src = "images/off.png";
                A = 0;
            }
            glow();
        } else {
            alert("Press Power Supply switch to connect power to the circuit.");
        }
    } else if (key == 2) {
        if (powersts) {
            if (inputB.src.match("images/switchoff") && ledB.src.match("images/off.png")) {
                inputB.src = "images/switchon.png";
                ledB.src = "images/on.png";
                B = 1;
            } else {
                inputB.src = "images/switchoff.png";
                ledB.src = "images/off.png";
                B = 0;
            }
            glow();
        } else {
            alert("Press Power Supply switch to connect power to the circuit.");
        }
    } else if (key == 3) {
        if (powersts) {
            if (inputC.src.match("images/switchoff") && ledC.src.match("images/off.png")) {
                inputC.src = "images/switchon.png";
                ledC.src = "images/on.png";
                C = 1;
            } else {
                inputC.src = "images/switchoff.png";
                ledC.src = "images/off.png";
                C = 0;
            }
            glow();
        } else {
            alert("Press Power Supply switch to connect power to the circuit.");
        }
    } else if (key == 4) {
        if (powersts) {
            if (inputD.src.match("images/switchoff") && ledD.src.match("images/off.png")) {
                inputD.src = "images/switchon.png";
                ledD.src = "images/on.png";
                D = 1;
            } else {
                inputD.src = "images/switchoff.png";
                ledD.src = "images/off.png";
                D = 0;
            }
            glow();
        } else {
            alert("Press Power Supply switch to connect power to the circuit.");
        }
    }
}
// Input

// BCD to 7-Segment Decoder
function glow() {
    if (A == 0 && B == 0 && C == 0 && D == 0) {
        output.src = "images/00.png";
        msg.style.display = "none";
        disp = 0;
        a = b = c = d = e = f = 1;
        g = 0;
    } else if (A == 1 && B == 0 && C == 0 && D == 0) {
        output.src = "images/01.png";
        msg.style.display = "none";
        disp = 1;
        b = c = 1;
        a = d = e = f = g = 0;
    } else if (A == 0 && B == 1 && C == 0 && D == 0) {
        output.src = "images/02.png";
        msg.style.display = "none";
        disp = 2;
        a = b = d = e = g = 1;
        c = f = 0;
    } else if (A == 1 && B == 1 && C == 0 && D == 0) {
        output.src = "images/03.png";
        msg.style.display = "none";
        disp = 3;
        a = b = c = d = g = 1;
        e = f = 0;
    } else if (A == 0 && B == 0 && C == 1 && D == 0) {
        output.src = "images/04.png";
        msg.style.display = "none";
        disp = 4;
        b = c = f = g = 1;
        a = d = e = 0;
    } else if (A == 1 && B == 0 && C == 1 && D == 0) {
        output.src = "images/05.png";
        msg.style.display = "none";
        disp = 5;
        a = c = d = f = g = 1;
        b = e = 0;
    } else if (A == 0 && B == 1 && C == 1 && D == 0) {
        output.src = "images/06.png";
        msg.style.display = "none";
        disp = 6;
        c = d = e = f = g = 1;
        a = b = 0;
    } else if (A == 1 && B == 1 && C == 1 && D == 0) {
        output.src = "images/07.png";
        msg.style.display = "none";
        disp = 7;
        a = b = c = 1;
        d = e = f = g = 0;
    } else if (A == 0 && B == 0 && C == 0 && D == 1) {
        output.src = "images/08.png";
        msg.style.display = "none";
        disp = 8;
        a = b = c = d = e = f = g = 1;
    } else if (A == 1 && B == 0 && C == 0 && D == 1) {
        output.src = "images/09.png";
        msg.style.display = "none";
        disp = 9;
        a = b = c = f = g = 1;
        d = e = 0;
    } else {
        output.src = "images/disp-off.png";
        msg.style.removeProperty("display");
        disp = "INVALID";
        a = b = c = d = e = f = g = "x";
    }
}
// BCD to 7-Segment Decoder

// Add Data
function addData() {
    if (powersts) {
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);

        cell1.innerHTML = n++;
        cell2.innerHTML = A;
        cell3.innerHTML = B;
        cell4.innerHTML = C;
        cell5.innerHTML = D;
        cell6.innerHTML = a;
        cell7.innerHTML = b;
        cell8.innerHTML = c;
        cell9.innerHTML = d;
        cell10.innerHTML = e;
        cell11.innerHTML = f;
        cell12.innerHTML = g;
        cell13.innerHTML = disp;

    } else {
        alert("Press Power Supply switch to connect power to the circuit.");
    }
}

// Clear Data
function clr() {
    table.innerHTML = "";
    n = 1;
}