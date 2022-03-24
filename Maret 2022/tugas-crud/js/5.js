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
    formData["idtrans"] = document.getElementById("idtrans").value;
    formData["idbar"] = document.getElementById("idbar").value;
    formData["idpem"] = document.getElementById("idpem").value;
    formData["date"] = document.getElementById("date").value;
    formData["ket"] = document.getElementById("ket").value;
    return formData;
}

// Function tambah data ke tabel
function inputTabel(data) {
    var table = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idtrans;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idbar;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.idpem;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.ket;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button class="btn btn-warning btn-sm" onclick="edit(this)">
<i class="bi bi-pencil-square"></i>
</button>
    <button class="btn btn-danger btn-sm" onclick="hapus(this)">
    <i class="bi bi-trash"></i>
</button>`;
}

// Function Reset Setelah Tambah Data
function reset() {
    document.getElementById("idtrans").value = "";
    document.getElementById("idbar").value = "";
    document.getElementById("idpem").value = "- Jenis Kelamin -";
    document.getElementById("date").value = "";
    document.getElementById("ket").value = "";
    pilihRow = null;
}

// Function Edit Data
function edit(td) {
    pilihRow = td.parentElement.parentElement;
    document.getElementById("idtrans").value = pilihRow.cells[0].innerHTML;
    document.getElementById("idbar").value = pilihRow.cells[1].innerHTML;
    document.getElementById("idpem").value = pilihRow.cells[2].innerHTML;
    document.getElementById("date").value = pilihRow.cells[3].innerHTML;
    document.getElementById("ket").value = pilihRow.cells[4].innerHTML;
}

// Function Update data
function updatedata(formData) {
    pilihRow.cells[0].innerHTML = formData.idtrans;
    pilihRow.cells[1].innerHTML = formData.idbar;
    pilihRow.cells[2].innerHTML = formData.idpem;
    pilihRow.cells[3].innerHTML = formData.date;
    pilihRow.cells[4].innerHTML = formData.ket;
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
    if (document.getElementById("idtrans").value == "") {}
    return isValid;
}