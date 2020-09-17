var subtractor = "HALF";
var powersts = false;
var a = 0;
var b = 0;
var c = 0;
var diff;
var brw;
var n = 1;
var pwr = document.getElementById("power");
var sub = document.getElementById("subtractor");
var inputA = document.getElementById("input-switch-a");
var inputB = document.getElementById("input-switch-b");
var inputBIN = document.getElementById("input-switch-c");
var ledA = document.getElementById("input-led-a");
var ledB = document.getElementById("input-led-b");
var ledBIN = document.getElementById("input-led-c");
var ledD = document.getElementById("output-led-dif");
var ledBOUT = document.getElementById("output-led-brw");
var tableC = document.getElementById("table-col-c");
var tableCOUT = document.getElementById("table-col-cout");

function checksubtractor(subtractorsts) {
    pwr.src = "images/power-off.png";
    powersts = false;
    inputA.src = "images/switchoff.png";
    inputB.src = "images/switchoff.png";
    inputBIN.src = "images/switchoff.png";
    ledA.src = "images/off.png";
    ledB.src = "images/off.png";
    ledBIN.src = "images/off.png";
    ledD.src = "images/off.png";
    ledBOUT.src = "images/off.png";
    a = 0;
    b = 0;
    c = 0;
    diff = 0;
    brw = 0;
    clr();


    switch (subtractorsts) {
        case "HALF":
            sub.src = "images/01.png";
            sub.style.width = "65%";
            sub.style.left = "145px";

            inputA.style.top = "280px";
            inputA.style.left = "245px";
            ledA.style.top = "234px";
            ledA.style.left = "347px";
            inputB.style.top = "334px";
            inputB.style.left = "245px";
            ledB.style.top = "350px";
            ledB.style.left = "351px";
            inputBIN.style.display = "none";
            ledBIN.style.display = "none";
            ledD.style.top = "294px";
            ledD.style.left = "747px";
            ledBOUT.style.top = "443px";
            ledBOUT.style.left = "746px";
            tableC.style.display = "none";
            tableCOUT.innerHTML = "BORROW";
            subtractor = subtractorsts;
            break;
        case "FULL":
            sub.src = "images/02.png";
            sub.style.width = "85%";
            sub.style.left = "85px";
            inputA.style.top = "275px";
            inputA.style.left = "162px";
            ledA.style.top = "229px";
            ledA.style.left = "266px";
            inputB.style.top = "318px";
            inputB.style.left = "162px";
            ledB.style.top = "334px";
            ledB.style.left = "271px";
            inputBIN.style.removeProperty('display');
            ledBIN.style.removeProperty('display');
            ledD.style.top = "303px";
            ledD.style.left = "798px";
            ledBOUT.style.top = "436px";
            ledBOUT.style.left = "954px";
            tableC.style.removeProperty('display');
            tableCOUT.innerHTML = "BORROW<sub>out</sub>";
            subtractor = subtractorsts;
            break;
    }
}



//Power Supply
function powerkey() {

    if (pwr.src.match("images/power-off.png")) {
        pwr.src = "images/power-on.png";
        powersts = true;
        switch (subtractor) {
            case "HALF":
                halfglow();
                break;
            case "FULL":
                fullglow();
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
                switch (subtractor) {
                    case "HALF":
                        halfglow();
                        break;
                    case "FULL":
                        fullglow();
                        break;
                }
            } else {
                img.src = "images/switchoff.png";
                led.src = "images/off.png";
                a = 0;
                switch (subtractor) {
                    case "HALF":
                        halfglow();
                        break;
                    case "FULL":
                        fullglow();
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
                switch (subtractor) {
                    case "HALF":
                        halfglow();
                        break;
                    case "FULL":
                        fullglow();
                        break;
                }
            } else {
                img.src = "images/switchoff.png";
                led.src = "images/off.png";
                b = 0;
                switch (subtractor) {
                    case "HALF":
                        halfglow();
                        break;
                    case "FULL":
                        fullglow();
                        break;
                }
            }
        } else {
            alert("Press Power Supply switch to connect power to the circuit.");
        }
    } else if (key == 3) {
        img = document.getElementById("input-switch-c");
        led = document.getElementById("input-led-c");
        if (powersts) {
            if (img.src.match("images/switchoff") && led.src.match("images/off.png")) {
                img.src = "images/switchon.png";
                led.src = "images/on.png";
                c = 1;
                switch (subtractor) {
                    case "HALF":
                        halfglow();
                        break;
                    case "FULL":
                        fullglow();
                        break;
                }
            } else {
                img.src = "images/switchoff.png";
                led.src = "images/off.png";
                c = 0;
                switch (subtractor) {
                    case "HALF":
                        halfglow();
                        break;
                    case "FULL":
                        fullglow();
                        break;
                }
            }
        } else {
            alert("Press Power Supply switch to connect power to the circuit.");
        }
    }
}
//Input

// Half subtractor
function halfglow() {
    var outledDIF = document.getElementById("output-led-dif");
    var outledBRW = document.getElementById("output-led-brw");
    if (a == 0 && b == 0) {
        outledDIF.src = "images/off.png";
        outledBRW.src = "images/off.png";
        diff = 0;
        brw = 0;
    } else if (a == 0 && b == 1) {
        outledDIF.src = "images/on.png";
        outledBRW.src = "images/on.png";
        diff = 1;
        brw = 1;
    } else if (a == 1 && b == 0) {
        outledDIF.src = "images/on.png";
        outledBRW.src = "images/off.png";
        diff = 1;
        brw = 0;
    } else if (a == 1 && b == 1) {
        outledDIF.src = "images/off.png";
        outledBRW.src = "images/off.png";
        diff = 0;
        brw = 0;
    }
}
// Half subtractor

// Full subtractor
function fullglow() {
    var outledDIF = document.getElementById("output-led-dif");
    var outledBRW = document.getElementById("output-led-brw");
    if (a == 0 && b == 0 && c == 0) {
        outledDIF.src = "images/off.png";
        outledBRW.src = "images/off.png";
        diff = 0;
        brw = 0;
    } else if (a == 0 && b == 0 && c == 1) {
        outledDIF.src = "images/on.png";
        outledBRW.src = "images/on.png";
        diff = 1;
        brw = 1;
    } else if (a == 0 && b == 1 && c == 0) {
        outledDIF.src = "images/on.png";
        outledBRW.src = "images/on.png";
        diff = 1;
        brw = 1;
    } else if (a == 0 && b == 1 && c == 1) {
        outledDIF.src = "images/off.png";
        outledBRW.src = "images/on.png";
        diff = 0;
        brw = 1;
    } else if (a == 1 && b == 0 && c == 0) {
        outledDIF.src = "images/on.png";
        outledBRW.src = "images/off.png";
        diff = 1;
        brw = 0;
    } else if (a == 1 && b == 0 && c == 1) {
        outledDIF.src = "images/off.png";
        outledBRW.src = "images/off.png";
        diff = 0;
        brw = 0;
    } else if (a == 1 && b == 1 && c == 0) {
        outledDIF.src = "images/off.png";
        outledBRW.src = "images/off.png";
        diff = 0;
        brw = 0;
    } else if (a == 1 && b == 1 && c == 1) {
        outledDIF.src = "images/on.png";
        outledBRW.src = "images/on.png";
        diff = 1;
        brw = 1;
    }
}
// Full subtractor

// Add Data
function addData() {
    if (powersts) {
        var table = document.getElementById("truth-table");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);

        if (subtractor == "HALF") {
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = n++;
            cell2.innerHTML = a;
            cell3.innerHTML = b;
            cell4.innerHTML = diff;
            cell5.innerHTML = brw;
        } else {
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);

            cell1.innerHTML = n++;
            cell2.innerHTML = a;
            cell3.innerHTML = b;
            cell4.innerHTML = c;
            cell5.innerHTML = diff;
            cell6.innerHTML = brw;
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