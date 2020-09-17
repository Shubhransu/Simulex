// For Control Panel
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
//For Others
var bridge = "1";
var FF = false;
var AF = false;
var SGF, SGA;
var ACK;

function bridgechk(x) {
    hideA();
    hideB();
    hideC();
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
            bridge = x;
            break;
    }
}

function conA(x) {
    switch (bridge) {
        case "1":
            switch (x) {
                case "1":
                    hideA();
                    MAL11.style.removeProperty("display");
                    break;
                case "2":
                    hideA();
                    MAL12.style.removeProperty("display");
                    break;
                case "3":
                    hideA();
                    MAL13.style.removeProperty("display");
                    break;
            }
            break;
        case "2":
            switch (x) {
                case "1":
                    hideA();
                    AC11.style.removeProperty("display");
                    break;
                case "2":
                    hideA();
                    AC12.style.removeProperty("display");
                    break;
                case "3":
                    hideA();
                    AC13.style.removeProperty("display");
                    break;
            }
            break;
        case "3":
            switch (x) {
                case "1":
                    hideA();
                    WAL11.style.removeProperty("display");
                    break;
                case "2":
                    hideA();
                    WAL12.style.removeProperty("display");
                    break;
                case "3":
                    hideA();
                    WAL13.style.removeProperty("display");
                    break;
            }
            break;
    }
}

function conB(x) {
    switch (bridge) {
        case "1":
            switch (x) {
                case "1":
                    hideB();
                    BL31.style.removeProperty("display");
                    break;
                case "2":
                    hideB();
                    BL32.style.removeProperty("display");
                    break;
            }
            break;
        case "2":
            switch (x) {
                case "1":
                    hideB();
                    BC31.style.removeProperty("display");
                    break;
                case "2":
                    hideB();
                    BC32.style.removeProperty("display");
                    break;
            }
            break;
        case "3":
            switch (x) {
                case "1":
                    hideB();
                    BR31.style.removeProperty("display");
                    break;
                case "2":
                    hideB();
                    BR32.style.removeProperty("display");
                    break;
            }
            break;
    }
}

function conC(x) {
    switch (bridge) {
        case "1":
            switch (x) {
                case "1":
                    hideC();
                    MCR41.style.removeProperty("display");
                    break;
                case "2":
                    hideC();
                    MCR42.style.removeProperty("display");
                    break;
            }
            break;
        case "2":
            switch (x) {
                case "1":
                    hideC();
                    DCR41.style.removeProperty("display");
                    break;
                case "2":
                    hideC();
                    DCR42.style.removeProperty("display");
                    break;
            }
            break;
        case "3":
            switch (x) {
                case "1":
                    hideC();
                    CC41.style.removeProperty("display");
                    break;
                case "2":
                    hideC();
                    CC42.style.removeProperty("display");
                    break;
            }
            break;
    }
}

function fvtoggle() {
    if (SGP.src.match("images/Components/SignalGenerator/push-out.png")) {
        SGP.src = "images/Components/SignalGenerator/push-in.png";
        SGTF.style.display = "none";
        SGTA.style.removeProperty('display');
    } else if (SGP.src.match("images/Components/SignalGenerator/push-in.png")) {
        SGP.src = "images/Components/SignalGenerator/push-out.png";
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
    } else {
        SGBTN.innerText = "Connect SG";
        SGBTN.classList.toggle('btn-success');
        SGBTN.classList.toggle('btn-danger');
        SGWIRE.style.display = "none";
    }
}

function dmmtoggle() {
    if (DMMB.innerText.match("Connect DMM")) {
        DMMB.innerText = "Disconnect DMM";
        DMMB.classList.toggle('btn-success');
        DMMB.classList.toggle('btn-danger');
        DMM2R.style.removeProperty("display");
        DMM2B.style.removeProperty("display");
        ACK.unbind();
    } else {
        DMMB.innerText = "Connect DMM";
        DMMB.classList.toggle('btn-success');
        DMMB.classList.toggle('btn-danger');
        DMM2R.style.display = "none";
        DMM2B.style.display = "none";
        ACK.bind();
    }
}

function swtoggle(x) {
    switch (x) {
        case 1:
            if (ACS1.src.match("down.png")) {
                ACS1.src = "images/Components/ACBridgeCircuit/up.png";
                ACS1.style.top = "42.15rem";
            } else {
                ACS1.src = "images/Components/ACBridgeCircuit/down.png";
                ACS1.style.top = "43rem";
            }
            break;
        case 2:
            if (ACS2.src.match("down.png")) {
                ACS2.src = "images/Components/ACBridgeCircuit/up.png";
                ACS2.style.top = "42.15rem";
            } else {
                ACS2.src = "images/Components/ACBridgeCircuit/down.png";
                ACS2.style.top = "43rem";
            }
            break;
    }

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
        if (out > 4.99 && out < 5.09) {
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
        if (out > 1.90 && out < 2.01) {
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


var n1 = Math.floor((Math.random() * 10) + 1);
var n2 = 117;
var i = n1;
var f = n2;
var ia, fa;
var output;
var ang = Math.floor((Math.random() * 100) + 100);

window.onload = function() {
    hideA();
    hideB();
    hideC();



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
                output = Math.floor(i + (this.angle - ang) * Math.abs(f - i) / Math.abs(fa - ia));
            } else if (this.angle < ang) {
                i = n2;
                f = n1;
                ia = 180;
                fa = 360;
                output = Math.floor(f - (this.angle - ang) * Math.abs(f - i) / Math.abs(fa - ia));
            }
            if (output == n1) {
                DMMB.removeAttribute('disabled');
            } else {
                DMMB.setAttribute('disabled', true);
            }
            DMM1T.innerHTML = output;
        }
    });
}