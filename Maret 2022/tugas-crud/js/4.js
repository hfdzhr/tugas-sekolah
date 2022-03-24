var pilihRow = null;

function tambah() {
    if (validasi()) {
        var formData = readData();

        if (pilihRow == null)
            inputTabel(formData);
        else
            updatedata(formData);
        reset();
    }
}

function readData() {
    var formData = {};
    formData["idpem"] = document.getElementById("idpem").value;
    formData["tb"] = document.getElementById("tb").value;
    formData["total"] = document.getElementById("total").value;
    formData["idtrans"] = document.getElementById("idtrans").value;
    return formData;
}

// Function tambah data ke tabel
function inputTabel(data) {
    var table = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idpem;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.tb;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.total;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.idtrans;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button class="btn btn-warning btn-sm" onclick="edit(this)">
<i class="bi bi-pencil-square"></i>
</button>
    <button class="btn btn-danger btn-sm" onclick="hapus(this)">
    <i class="bi bi-trash"></i>
</button>`;
}

// Function Reset Setelah Tambah Data
function reset() {
    document.getElementById("idpem").value = "";
    document.getElementById("tb").value = "";
    document.getElementById("total").value = "";
    document.getElementById("idtrans").value = "";
    pilihRow = null;
}

// Function Edit Data
function edit(td) {
    pilihRow = td.parentElement.parentElement;
    document.getElementById("idpem").value = pilihRow.cells[0].innerHTML;
    document.getElementById("tb").value = pilihRow.cells[1].innerHTML;
    document.getElementById("total").value = pilihRow.cells[2].innerHTML;
    document.getElementById("idtrans").value = pilihRow.cells[3].innerHTML;
}

// Function Update data
function updatedata(formData) {
    pilihRow.cells[0].innerHTML = formData.idpem;
    pilihRow.cells[1].innerHTML = formData.tb;
    pilihRow.cells[2].innerHTML = formData.total;
    pilihRow.cells[3].innerHTML = formData.idtrans;
}

// Function Hapus Data
function hapus(td) {
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    reset();
}

// Fucntion Validasi Di Awal 
function validasi() {
    isValid = true;
    if (document.getElementById("idpem").value == "") {}
    return isValid;
}