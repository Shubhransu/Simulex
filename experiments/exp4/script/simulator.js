var dps = [];

window.onload = function() {
    var resistance = 1;
    var voltage = 0;
    var current = 0;
    var power = 0;
    var n = 1;
    var voltmeter = document.getElementById("voltmeter");
    var ammeter = document.getElementById("ammeter");
    var cktResistance = document.getElementById("resistance");
    var cktVoltage = document.getElementById("voltage");
    var inputR = document.getElementById("input-r");
    var inputResistance = document.getElementById("input-resistance");
    var inputV = document.getElementById("input-v");
    var inputVoltage = document.getElementById("input-voltage");
    var set = document.getElementById("set");
    var change = document.getElementById("change");
    var add = document.getElementById("add");

    // Graph
    var graphResistance = "Resistance: " + resistance + " kΩ";

    var chart = new CanvasJS.Chart("graph", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "theme1",
        title: {
            text: "Current vs Voltage (I-V) Graph",
            fontWeight: "bold",
            fontSize: 25,
            padding: 2,
            borderThickness: 2,
            cornerRadius: 4,
        },
        axisX: {
            title: "Current (mA)",
            minimum: 0,
        },
        axisY: {
            title: "Voltage (V)",
            minimum: 0,
        },
        toolTip: {
            enable: true
        },
        legend: {
            verticalAlign: "top",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            fontWeight: "bold",
        },
        data: [{
            type: "line",
            showInLegend: true,
            legendText: graphResistance,
            dataPoints: []
        }]
    });
    chart.render();

    //Save Graph
    var save = document.getElementsByTagName("button")[5];
    save.className = "btn btn-sm btn-info";
    save.style = "padding:0px 10px 2px;";
    save.innerHTML = "Save";

    //Resistance Input
    $("#input-resistance").on('input', function() {
        inputR.innerHTML = this.value;
        cktResistance.innerHTML = this.value;
        resistance = this.value;
    });
    $("#set").click(function() {
        setStatus = true;
        inputResistance.setAttribute('disabled', true);
        this.setAttribute('disabled', true);
        change.removeAttribute('disabled');
        inputVoltage.removeAttribute('disabled');
        add.removeAttribute('disabled');
        chart.options.data[0].legendText = "Resistance: " + resistance + " kΩ";
        chart.render();
    });
    $("#change").click(function() {
        setStatus = false;
        inputResistance.removeAttribute('disabled');
        this.setAttribute('disabled', true);
        set.removeAttribute('disabled');
        inputVoltage.value = 0;
        inputV.innerHTML = 0;
        cktVoltage.innerHTML = 0;
        voltmeter.innerHTML = 0;
        ammeter.innerHTML = (0).toFixed(2);
        inputVoltage.setAttribute('disabled', true);
        add.setAttribute('disabled', true);
        current = 0;
        voltage = 0;
        var tbl = document.getElementById("truth-table");
        tbl.innerHTML = "";
        n = 1;
        chart.options.data[0].dataPoints = [];
        chart.render();
    });

    // Voltage Input
    $("#input-voltage").on('input', function() {
        voltage = this.value;
        current = voltage / resistance;
        power = voltage * current;
        inputV.innerHTML = this.value;
        cktVoltage.innerHTML = this.value;
        voltmeter.innerHTML = this.value;
        ammeter.innerHTML = current.toFixed(2);
    });

    //Add Data
    $("#add").click(function() {
        var table = document.getElementById("truth-table");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = n++;
        cell2.innerHTML = resistance;
        cell3.innerHTML = voltage;
        cell4.innerHTML = current.toFixed(2);
        cell5.innerHTML = power.toFixed(2);
        dps.push({ x: parseFloat(current.toFixed(2)), y: parseFloat(voltage) });

        chart.options.data[0].dataPoints.push({ x: parseFloat(current.toFixed(2)), y: parseFloat(voltage) });
        chart.render();
    });

    // Clear Data
    $("#clear").click(function() {
        var tbl = document.getElementById("truth-table");
        tbl.innerHTML = "";
        n = 1;
        chart.options.data[0].dataPoints = [];
        chart.render();
    });
}