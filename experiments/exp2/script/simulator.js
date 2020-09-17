var adder = "HALF";
var powersts = false;
var a = 0;
var b = 0;
var c = 0;
var sum;
var carry;
var n = 1;
var pwr = document.getElementById("power");
var adr = document.getElementById("adder");
var inputA = document.getElementById("input-switch-a");
var inputB = document.getElementById("input-switch-b");
var inputC = document.getElementById("input-switch-c");
var ledA = document.getElementById("input-led-a");
var ledB = document.getElementById("input-led-b");
var ledCIN = document.getElementById("input-led-c");
var ledS = document.getElementById("output-led-s");
var ledCOUT = document.getElementById("output-led-c");
var tableC = document.getElementById("table-col-c");
var tableCOUT = document.getElementById("table-col-cout");

function checkadder(addersts) {
    pwr.src = "images/power-off.png";
    powersts = false;
    inputA.src = "images/switchoff.png";
    inputB.src = "images/switchoff.png";
    inputC.src = "images/switchoff.png";
    ledA.src = "images/off.png";
    ledB.src = "images/off.png";
    ledCIN.src = "images/off.png";
    ledS.src = "images/off.png";
    ledCOUT.src = "images/off.png";
    a = 0;
    b = 0;
    c = 0;
    sum = 0;
    carry = 0;
    clr();


    switch (addersts) {
        case "HALF":
            adr.src = "images/01.png";
            adr.style.width = "65%";
            adr.style.left = "145px";

            inputA.style.top = "285px";
            inputA.style.left = "260px";
            ledA.style.top = "236px";
            ledA.style.left = "369px";
            inputB.style.top = "340px";
            inputB.style.left = "260px";
            ledB.style.top = "356px";
            ledB.style.left = "373px";
            inputC.style.display = "none";
            ledCIN.style.display = "none";
            ledS.style.top = "299px";
            ledS.style.left = "806px";
            ledCOUT.style.top = "467px";
            ledCOUT.style.left = "806px";
            tableC.style.display = "none";
            tableCOUT.innerHTML = "CARRY";
            adder = addersts;
            break;
        case "FULL":
            adr.src = "images/02.png";
            adr.style.width = "85%";
            adr.style.left = "85px";
            inputA.style.top = "277px";
            inputA.style.left = "162px";
            ledA.style.top = "229px";
            ledA.style.left = "270px";
            inputB.style.top = "319px";
            inputB.style.left = "162px";
            ledB.style.top = "335px";
            ledB.style.left = "275px";
            inputC.style.removeProperty('display');
            ledCIN.style.removeProperty('display');
            ledS.style.top = "305px";
            ledS.style.left = "810px";
            ledCOUT.style.top = "440px";
            ledCOUT.style.left = "970px";
            tableC.style.removeProperty('display');
            tableCOUT.innerHTML = "CARRY<sub>out</sub>";
            adder = addersts;
            break;
    }
}



//Power Supply
function powerkey() {

    if (pwr.src.match("images/power-off.png")) {
        pwr.src = "images/power-on.png";
        powersts = true;
        switch (adder) {
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
                switch (adder) {
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
                switch (adder) {
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
                switch (adder) {
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
                switch (adder) {
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
                switch (adder) {
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
                switch (adder) {
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

// Half adder
function halfglow() {
    var outledS = document.getElementById("output-led-s");
    var outledC = document.getElementById("output-led-c");
    if (a == 0 && b == 0) {
        outledS.src = "images/off.png";
        outledC.src = "images/off.png";
        sum = 0;
        carry = 0;
    } else if (a == 0 && b == 1) {
        outledS.src = "images/on.png";
        outledC.src = "images/off.png";
        sum = 1;
        carry = 0;
    } else if (a == 1 && b == 0) {
        outledS.src = "images/on.png";
        outledC.src = "images/off.png";
        sum = 1;
        carry = 0;
    } else if (a == 1 && b == 1) {
        outledS.src = "images/off.png";
        outledC.src = "images/on.png";
        sum = 0;
        carry = 1;
    }
}
// Half adder

// Full adder
function fullglow() {
    var outledS = document.getElementById("output-led-s");
    var outledC = document.getElementById("output-led-c");
    if (a == 0 && b == 0 && c == 0) {
        outledS.src = "images/off.png";
        outledC.src = "images/off.png";
        sum = 0;
        carry = 0;
    } else if (a == 0 && b == 0 && c == 1) {
        outledS.src = "images/on.png";
        outledC.src = "images/off.png";
        sum = 1;
        carry = 0;
    } else if (a == 0 && b == 1 && c == 0) {
        outledS.src = "images/on.png";
        outledC.src = "images/off.png";
        sum = 1;
        carry = 0;
    } else if (a == 0 && b == 1 && c == 1) {
        outledS.src = "images/off.png";
        outledC.src = "images/on.png";
        sum = 0;
        carry = 1;
    } else if (a == 1 && b == 0 && c == 0) {
        outledS.src = "images/on.png";
        outledC.src = "images/off.png";
        sum = 1;
        carry = 0;
    } else if (a == 1 && b == 0 && c == 1) {
        outledS.src = "images/off.png";
        outledC.src = "images/on.png";
        sum = 0;
        carry = 1;
    } else if (a == 1 && b == 1 && c == 0) {
        outledS.src = "images/off.png";
        outledC.src = "images/on.png";
        sum = 0;
        carry = 1;
    } else if (a == 1 && b == 1 && c == 1) {
        outledS.src = "images/on.png";
        outledC.src = "images/on.png";
        sum = 1;
        carry = 1;
    }
}
// Full adder

// Add Data
function addData() {
    if (powersts) {
        var table = document.getElementById("truth-table");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);

        if (adder == "HALF") {
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = n++;
            cell2.innerHTML = a;
            cell3.innerHTML = b;
            cell4.innerHTML = sum;
            cell5.innerHTML = carry;
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
            cell5.innerHTML = sum;
            cell6.innerHTML = carry;
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