//AC Bridge Simulator 
//By - Shubhransu Saho
//Version - 1.1

// For Control Panel
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var LA1 = document.getElementById("LA1");
var LA2 = document.getElementById("LA2");
var LA3 = document.getElementById("LA3");
var LB1 = document.getElementById("LB1");
var LB2 = document.getElementById("LB2");
var LC1 = document.getElementById("LC1");
var LC2 = document.getElementById("LC2");

// For SG
var SGWIRE = document.getElementById("SGWIRE");
var SGP = document.getElementById("SGP");
var SGTF = document.getElementById("SGTF");
var SGTFV = document.getElementById("SGTFV");
var SGTA = document.getElementById("SGTA");
var SGTAV = document.getElementById("SGTAV");
var SGBTN = document.getElementById("SGBTN");

// For DMM1
var DMM1T = document.getElementById("DMM1T");

// For DMM2
var DMM2T = document.getElementById("DMM2T");
var DMM2R = document.getElementById("DMM2R");
var DMM2B = document.getElementById("DMM2B");
var DMMB = document.getElementById("DMMB");

//  For AC Bridge
var ACS1 = document.getElementById("ACS1");
var ACS2 = document.getElementById("ACS2");

// For Maxwell
var MAL11 = document.getElementById("MAL11");
var MAL12 = document.getElementById("MAL12");
var MAL13 = document.getElementById("MAL13");
var BL31 = document.getElementById("BL31");
var BL32 = document.getElementById("BL32");
var MCR41 = document.getElementById("MCR41");
var MCR42 = document.getElementById("MCR42");

// For De Sauty
var AC11 = document.getElementById("AC11");
var AC12 = document.getElementById("AC12");
var AC13 = document.getElementById("AC13");
var BC31 = document.getElementById("BC31");
var BC32 = document.getElementById("BC32");
var DCR41 = document.getElementById("DCR41");
var DCR42 = document.getElementById("DCR42");

// For Maxwell-Wein
var WAL11 = document.getElementById("WAL11");
var WAL12 = document.getElementById("WAL12");
var WAL13 = document.getElementById("WAL13");
var BR31 = document.getElementById("BR31");
var BR32 = document.getElementById("BR32");
var CC41 = document.getElementById("CC41");
var CC42 = document.getElementById("CC42");

// For Result Table
var AddBTN = document.getElementById("add");
var LINPUT = document.getElementById("LINPUT");
var TL11 = document.getElementById("TL11");
var TL12 = document.getElementById("TL12");
var TL13 = document.getElementById("TL13");
var SETV = document.getElementById("SETV");
var tableBridge = document.getElementById("tbl-bridge");
var tableData = document.getElementById("table-data");

//For Flags
var SGFlag = false;
var AFlag = false;
var BFlag = false;
var CFlag = false;
var SW1Flag = true;
var SW2Flag = true;
var LValueFlag = false;

//For Others
var bridge = "1";
var A, B, C;
var FF = false;
var AF = false;
var SGF, SGA;
var ACK;
var N1, N2, i, f, ia, fa;
var DMM1Output, DMM2Output;
var ang;
var n = 1;


// Various Functions
function bridgechk(x) {
    hideA();
    hideB();
    hideC();
    clr();
    AFlag = false;
    BFlag = false;
    CFlag = false;
    dmmtoggle(false);
    DMMB.disabled = true;
    var radio = document.querySelectorAll("input[type='radio']");
    for (var i = 0; i < radio.length; i++) {
        radio[i].checked = false;
    }
    switch (x) {
        case "1":
            LA1.innerHTML = "L1";
            LA2.innerHTML = "L1'";
            LA3.innerHTML = 'L1"';
            LB1.innerHTML = "L3";
            LB2.innerHTML = "L3'";
            LC1.innerHTML = "R4";
            LC2.innerHTML = "R4'";
            LINPUT.style.display = "none";
            tableBridge.innerText = "Maxwell Bridge";
            bridge = x;
            break;
        case "2":
            LA1.innerHTML = "C1";
            LA2.innerHTML = "C1'";
            LA3.innerHTML = 'C1"';
            LB1.innerHTML = "C3";
            LB2.innerHTML = "C3'";
            LC1.innerHTML = "R4";
            LC2.innerHTML = "R4'";
            LINPUT.style.display = "none";
            tableBridge.innerText = "De Sauty Bridge";
            bridge = x;
            break;
        case "3":
            LA1.innerHTML = "L1";
            LA2.innerHTML = "L1'";
            LA3.innerHTML = 'L1"';
            LB1.innerHTML = "R3";
            LB2.innerHTML = "R3'";
            LC1.innerHTML = "C4";
            LC2.innerHTML = "C4'";
            LINPUT.style.removeProperty("display");
            tableBridge.innerText = "Maxwell-Wien Bridge";
            bridge = x;
            break;
    }
    DMM1Check();
}

function conA(x) {
    AFlag = true;
    DMM1Check();
    DMMB.disabled = true;
    switch (bridge) {
        case "1":
            switch (x) {
                case "1":
                    hideA();
                    MAL11.style.removeProperty("display");
                    A = "L1";
                    break;
                case "2":
                    hideA();
                    MAL12.style.removeProperty("display");
                    A = "L1'";
                    break;
                case "3":
                    hideA();
                    MAL13.style.removeProperty("display");
                    A = 'L1"';
                    break;
            }
            break;
        case "2":
            switch (x) {
                case "1":
                    hideA();
                    AC11.style.removeProperty("display");
                    A = "C1";
                    break;
                case "2":
                    hideA();
                    AC12.style.removeProperty("display");
                    A = "C1'";
                    break;
                case "3":
                    hideA();
                    AC13.style.removeProperty("display");
                    A = 'C1"';
                    break;
            }
            break;
        case "3":
            switch (x) {
                case "1":
                    hideA();
                    WAL11.style.removeProperty("display");
                    A = "L1";
                    break;
                case "2":
                    hideA();
                    WAL12.style.removeProperty("display");
                    A = "L1'";
                    break;
                case "3":
                    hideA();
                    WAL13.style.removeProperty("display");
                    A = 'L1"';
                    break;
            }
            break;
    }
}

function conB(x) {
    BFlag = true;
    DMM1Check();
    DMMB.disabled = true;
    switch (bridge) {
        case "1":
            switch (x) {
                case "1":
                    hideB();
                    BL31.style.removeProperty("display");
                    B = "L3";
                    break;
                case "2":
                    hideB();
                    BL32.style.removeProperty("display");
                    B = "L3'";
                    break;
            }
            break;
        case "2":
            switch (x) {
                case "1":
                    hideB();
                    BC31.style.removeProperty("display");
                    B = "C3";
                    break;
                case "2":
                    hideB();
                    BC32.style.removeProperty("display");
                    B = "C3'";
                    break;
            }
            break;
        case "3":
            switch (x) {
                case "1":
                    hideB();
                    BR31.style.removeProperty("display");
                    B = "R3";
                    break;
                case "2":
                    hideB();
                    BR32.style.removeProperty("display");
                    B = "R3'";
                    break;
            }
            break;
    }
}

function conC(x) {
    CFlag = true;
    DMM1Check();
    DMMB.disabled = true;
    switch (bridge) {
        case "1":
            switch (x) {
                case "1":
                    hideC();
                    MCR42.style.removeProperty("display");
                    C = "R4";
                    break;
                case "2":
                    hideC();
                    MCR41.style.removeProperty("display");
                    C = "R4'";
                    break;
            }
            break;
        case "2":
            switch (x) {
                case "1":
                    hideC();
                    DCR42.style.removeProperty("display");
                    C = "R4";
                    break;
                case "2":
                    hideC();
                    DCR41.style.removeProperty("display");
                    C = "R4'";
                    break;
            }
            break;
        case "3":
            switch (x) {
                case "1":
                    hideC();
                    CC41.style.removeProperty("display");
                    C = "C4";
                    break;
                case "2":
                    hideC();
                    CC42.style.removeProperty("display");
                    C = "C4'";
                    break;
            }
            break;
    }
}

function fvtoggle() {
    if (SGP.src.match("images/Components/SignalGenerator/push-out.png")) {
        SGP.src = "images/Components/SignalGenerator/push-in.png";
        SGP.style.width = "3.2rem";
        SGP.style.left = "25.15rem";
        SGTF.style.display = "none";
        SGTA.style.removeProperty('display');
    } else if (SGP.src.match("images/Components/SignalGenerator/push-in.png")) {
        SGP.src = "images/Components/SignalGenerator/push-out.png";
        SGP.style.width = "3.4rem";
        SGP.style.left = "25rem";
        SGTA.style.display = "none";
        SGTF.style.removeProperty('display');
    }
}

function sgtoggle() {
    if (SGBTN.innerText.match("Connect SG")) {
        SGBTN.innerText = "Disconnect SG";
        SGBTN.classList.toggle('btn-success');
        SGBTN.classList.toggle('btn-danger');
        SGWIRE.style.removeProperty("display");
        SGF.unbind();
        SGA.unbind();
        SGFlag = true;
        DMM1Check();
    } else {
        SGBTN.innerText = "Connect SG";
        SGBTN.classList.toggle('btn-success');
        SGBTN.classList.toggle('btn-danger');
        SGWIRE.style.display = "none";
        SGFlag = false;
        DMM1Check();
    }
}

function dmmtoggle(x) {
    if (DMMB.innerText.match("Connect DMM") && SGFlag && AFlag && BFlag && CFlag && (!SW1Flag) && (!SW2Flag)) {
        DMM2Check();
        disable();
        DMMB.innerText = "Disconnect DMM";
        DMMB.classList.remove('btn-success');
        DMMB.classList.add('btn-danger');
        DMM2R.style.removeProperty("display");
        DMM2B.style.removeProperty("display");
        AddBTN.disabled = false;
    } else {
        if (!x) {
            DMM2Check(x);
            undisable();
            DMMB.innerText = "Connect DMM";
            DMMB.classList.remove('btn-danger');
            DMMB.classList.add('btn-success');
            DMM2R.style.display = "none";
            DMM2B.style.display = "none";
            DMM2T.innerHTML = "0";
            AddBTN.disabled = true;
        } else {
            DMM2Check(true);
            undisable();
            DMMB.innerText = "Connect DMM";
            DMMB.classList.remove('btn-danger');
            DMMB.classList.add('btn-success');
            DMM2R.style.display = "none";
            DMM2B.style.display = "none";
            DMM2T.innerHTML = "0";
            AddBTN.disabled = true;
        }
    }
}

function swtoggle(x) {
    switch (x) {
        case 1:
            if (ACS1.src.match("down.png")) {
                ACS1.src = "images/Components/ACBridgeCircuit/up.png";
                ACS1.style.top = "42.15rem";
                SW1Flag = false;
                DMM1Check();
            } else {
                ACS1.src = "images/Components/ACBridgeCircuit/down.png";
                ACS1.style.top = "43rem";
                SW1Flag = true;
                DMM1Check();
            }
            break;
        case 2:
            if (ACS2.src.match("down.png")) {
                ACS2.src = "images/Components/ACBridgeCircuit/up.png";
                ACS2.style.top = "42.15rem";
                SW2Flag = false;
                DMM1Check();
            } else {
                ACS2.src = "images/Components/ACBridgeCircuit/down.png";
                ACS2.style.top = "43rem";
                SW2Flag = true;
                DMM1Check();
            }
            break;
    }
}

function DMM1Check() {
    if (SGFlag && AFlag && BFlag && CFlag && SW1Flag && SW2Flag) {
        newReading();
        ACK.bind();
    } else {
        DMM1T.innerHTML = "0";
        ACK.unbind();
    }
}

function DMM2Check(x) {
    if (SGFlag && AFlag && BFlag && CFlag && (!SW1Flag) && (!SW2Flag)) {
        if (DMMB.innerText.match("Connect DMM")) {
            switch (bridge) {
                //Maxwell Data Assign
                case "1":
                    switch (A) {
                        case "L1":
                            if (B == "L3") {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[0];
                                    DMM2Output = data[0];
                                } else {
                                    DMM2T.innerHTML = data[1];
                                    DMM2Output = data[1];
                                }
                            } else {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[2];
                                    DMM2Output = data[2];
                                } else {
                                    DMM2T.innerHTML = data[3];
                                    DMM2Output = data[3];
                                }
                            }
                            break;
                        case "L1'":
                            if (B == "L3") {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[4];
                                    DMM2Output = data[4];
                                } else {
                                    DMM2T.innerHTML = data[5];
                                    DMM2Output = data[5];
                                }
                            } else {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[6];
                                    DMM2Output = data[6];
                                } else {
                                    DMM2T.innerHTML = data[7];
                                    DMM2Output = data[7];
                                }
                            }
                            break;
                        case 'L1"':
                            if (B == "L3") {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[8];
                                    DMM2Output = data[8];
                                } else {
                                    DMM2T.innerHTML = data[9];
                                    DMM2Output = data[9];
                                }
                            } else {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[10];
                                    DMM2Output = data[10];
                                } else {
                                    DMM2T.innerHTML = data[11];
                                    DMM2Output = data[11];
                                }
                            }
                            break;

                    }
                    break;
                    //De-Sauty Data Assign
                case "2":
                    switch (A) {
                        case "C1":
                            if (B == "C3") {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[12];
                                    DMM2Output = data[12];
                                } else {
                                    DMM2T.innerHTML = data[13];
                                    DMM2Output = data[13];
                                }
                            } else {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[14];
                                    DMM2Output = data[14];
                                } else {
                                    DMM2T.innerHTML = data[15];
                                    DMM2Output = data[15];
                                }
                            }
                            break;
                        case "C1'":
                            if (B == "C3") {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[16];
                                    DMM2Output = data[16];
                                } else {
                                    DMM2T.innerHTML = data[17];
                                    DMM2Output = data[17];
                                }
                            } else {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[18];
                                    DMM2Output = data[18];
                                } else {
                                    DMM2T.innerHTML = data[19];
                                    DMM2Output = data[19];
                                }
                            }
                            break;
                        case 'C1"':
                            if (B == "C3") {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[20];
                                    DMM2Output = data[20];
                                } else {
                                    DMM2T.innerHTML = data[21];
                                    DMM2Output = data[21];
                                }
                            } else {
                                if (C == "R4") {
                                    DMM2T.innerHTML = data[22];
                                    DMM2Output = data[22];
                                } else {
                                    DMM2T.innerHTML = data[23];
                                    DMM2Output = data[23];
                                }
                            }
                            break;

                    }
                    break;
                    //Maxwell-Wein Data Assign
                case "3":
                    switch (A) {
                        case "L1":
                            if (B == "R3") {
                                if (C == "C4") {
                                    DMM2T.innerHTML = data[24];
                                    DMM2Output = data[24];
                                } else {
                                    DMM2T.innerHTML = data[30];
                                    DMM2Output = data[30];
                                }
                            } else {
                                if (C == "C4") {
                                    DMM2T.innerHTML = data[25];
                                    DMM2Output = data[25];
                                } else {
                                    DMM2T.innerHTML = data[31];
                                    DMM2Output = data[31];
                                }
                            }
                            break;
                        case "L1'":
                            if (B == "R3") {
                                if (C == "C4") {
                                    DMM2T.innerHTML = data[26];
                                    DMM2Output = data[26];
                                } else {
                                    DMM2T.innerHTML = data[32];
                                    DMM2Output = data[32];
                                }
                            } else {
                                if (C == "C4") {
                                    DMM2T.innerHTML = data[27];
                                    DMM2Output = data[27];
                                } else {
                                    DMM2T.innerHTML = data[33];
                                    DMM2Output = data[33];
                                }
                            }
                            break;
                        case 'L1"':
                            if (B == "R3") {
                                if (C == "C4") {
                                    DMM2T.innerHTML = data[28];
                                    DMM2Output = data[28];
                                } else {
                                    DMM2T.innerHTML = data[34];
                                    DMM2Output = data[34];
                                }
                            } else {
                                if (C == "C4") {
                                    DMM2T.innerHTML = data[29];
                                    DMM2Output = data[29];
                                } else {
                                    DMM2T.innerHTML = data[35];
                                    DMM2Output = data[35];
                                }
                            }
                            break;

                    }
                    break;
            }
        }
    } else {
        if (!x) {} else {
            DMM2T.innerHTML = "0";
            alert("Check all connections and switches.");
        }
    }
}

function disable() {
    a1.disabled = true;
    a2.disabled = true;
    a3.disabled = true;
    b1.disabled = true;
    b2.disabled = true;
    c1.disabled = true;
    c2.disabled = true;
}

function undisable() {
    a1.disabled = false;
    a2.disabled = false;
    a3.disabled = false;
    b1.disabled = false;
    b2.disabled = false;
    c1.disabled = false;
    c2.disabled = false;
}

function hideA() {
    MAL11.style.display = "none";
    MAL12.style.display = "none";
    MAL13.style.display = "none";
    AC11.style.display = "none";
    AC12.style.display = "none";
    AC13.style.display = "none";
    WAL11.style.display = "none";
    WAL12.style.display = "none";
    WAL13.style.display = "none";
}

function hideB() {
    BL31.style.display = "none";
    BL32.style.display = "none";
    BC31.style.display = "none";
    BC32.style.display = "none";
    BR31.style.display = "none";
    BR32.style.display = "none";
}

function hideC() {
    MCR41.style.display = "none";
    MCR42.style.display = "none";
    DCR41.style.display = "none";
    DCR42.style.display = "none";
    CC41.style.display = "none";
    CC42.style.display = "none";
}

SGF = new Propeller("#SGF", {
    inertia: 0,
    speed: 0,
    onRotate: function() {
        i = 1.00;
        f = 11.00;
        var out = (i + (this.angle) * Math.abs(f - i) / 360).toFixed(2);
        SGTFV.innerHTML = out;
        if (out > 4.96 && out < 5.09) {
            FF = true;
        } else {
            FF = false;
        }
        if (FF && AF) {
            SGBTN.removeAttribute('disabled');
        } else {
            SGBTN.setAttribute('disabled', true);
        }
    }
});
SGA = new Propeller("#SGA", {
    inertia: 0,
    speed: 0,
    onRotate: function() {
        i = 1.00;
        f = 11.00;
        var out = (i + (this.angle) * Math.abs(f - i) / 360).toFixed(2);
        SGTAV.innerHTML = out;
        if (out > 1.414 && out < 2.829) {
            AF = true;
        } else {
            AF = false
        }
        if (FF && AF) {
            SGBTN.removeAttribute('disabled');
        } else {
            SGBTN.setAttribute('disabled', true);
        }
    }
});

function DMM1Data() {
    switch (bridge) {
        case "1":
            n1 = 0;
            n2 = 44;
            i = n1;
            f = n2;
            ang = Math.floor((Math.random() * 100) + 100);
            break;
        case "2":
            n1 = Math.floor((Math.random() * 10) + 1);
            n2 = 114;
            i = n1;
            f = n2;
            ang = Math.floor((Math.random() * 100) + 100);
            break;
        case "3":
            n1 = Math.floor((Math.random() * 10) + 10);
            n2 = 143;
            i = n1;
            f = n2;
            ang = Math.floor((Math.random() * 100) + 100);
            break;
    }
}

function newReading() {
    DMM1Data();
    DMM1T.innerHTML = Math.floor(180 * Math.abs(f - i) / 180);
    ACK = new Propeller("#ACK", {
        inertia: 0,
        speed: 0,
        onRotate: function() {
            if (this.angle > ang) {
                i = n1;
                f = n2;
                ia = ang;
                fa = 180 + ang;
                DMM1Output = Math.floor(i + (this.angle - ang) * Math.abs(f - i) / Math.abs(fa - ia));
            } else if (this.angle < ang) {
                i = n2;
                f = n1;
                ia = 180;
                fa = 360;
                DMM1Output = Math.floor(f - (this.angle - ang) * Math.abs(f - i) / Math.abs(fa - ia));
            }
            if (DMM1Output == n1) {
                DMMB.removeAttribute('disabled');
            } else {
                DMMB.setAttribute('disabled', true);
            }
            DMM1T.innerHTML = DMM1Output;
        }
    });
}

// Table Section
function addData() {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = tableData.insertRow(-1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    switch (bridge) {
        case "1":
            cell1.innerText = n++;
            cell2.innerText = A;
            cell3.innerText = B + " = " + KnownValueB(B) + " mH";
            cell4.innerText = C + " = " + KnownValueC(C) + " Ω";
            cell5.innerText = DMM2Output;
            cell6.innerText = A + " = " + (DMM2Output * KnownValueB(B) / KnownValueC(C)).toFixed(3) + " mH";
            break;
        case "2":
            cell1.innerText = n++;
            cell2.innerText = A;
            cell3.innerText = B + " = " + KnownValueB(B) + " μF";
            cell4.innerText = C + " = " + KnownValueC(C) + " Ω";
            cell5.innerText = DMM2Output;
            cell6.innerText = A + " = " + (KnownValueB(B) * KnownValueC(C) / DMM2Output).toFixed(3) + " μF";
            break;
        case "3":
            if (LValueFlag) {
                cell1.innerText = n++;
                cell3.innerText = B + " = " + KnownValueB(B) + " Ω";
                cell4.innerText = C;
                cell5.innerText = DMM2Output;
                switch (A) {
                    case "L1":
                        cell2.innerText = A + " = " + TL11.value + " mH";
                        cell6.innerText = C + " = " + (parseFloat(TL11.value) * 1000 / (KnownValueB(B) * DMM2Output)).toFixed(3) + " μF";
                        break;
                    case "L1'":
                        cell2.innerText = A + " = " + TL12.value + " mH";
                        cell6.innerText = C + " = " + (parseFloat(TL12.value) * 1000 / (KnownValueB(B) * DMM2Output)).toFixed(3) + " μF";
                        break;
                    case 'L1"':
                        cell2.innerText = A + " = " + TL13.value + " mH";
                        cell6.innerText = C + " = " + (parseFloat(TL13.value) * 1000 / (KnownValueB(B) * DMM2Output)).toFixed(3) + " μF";
                        break;
                }
            } else {
                alert("Set value of L1, L1'" + ' and L1".');
            }
            break;
    }
}

//Set L value check
function LValueCheck() {
    if (SETV.innerText.match("Set Value")) {
        if ((TL11.value.length != 0) && (TL12.value.length != 0) && (TL12.value.length != 0)) {
            TL11.readOnly = true;
            TL12.readOnly = true;
            TL13.readOnly = true;
            SETV.innerText = "Change Value";
            LValueFlag = true;
        } else {
            alert("Set value of L1, L1'" + ' and L1".');
        }
    } else {
        TL11.readOnly = false;
        TL12.readOnly = false;
        TL13.readOnly = false;
        SETV.innerText = "Set Value";
        LValueFlag = false;
    }
}

// Known value for B and C
function KnownValueB(x) {
    switch (x) {
        case "L3":
            return 3.3;
            break;
        case "L3'":
            return 7.4;
            break;
        case "C3":
            return 0.1;
            break;
        case "C3'":
            return 0.2;
            break;
        case "R3":
            return 220;
            break;
        case "R3'":
            return 320;
            break;
    }
}

function KnownValueC(x) {
    switch (x) {
        case "R4":
            return 220;
            break;
        case "R4'":
            return 440;
            break;
    }
}

// Clear Data
function clr() {
    tableData.innerHTML = "";
    n = 1;
}

window.onload = function() {
    getdata();
    hideA();
    hideB();
    hideC();
    newReading();
    DMM1Check();
    const loder = document.querySelector(".loading");
    loder.className += " hide";
}