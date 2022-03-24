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
    formData["idsupplier"] = document.getElementById("idsupplier").value;
    formData["namesup"] = document.getElementById("namesup").value;
    formData["telp"] = document.getElementById("telp").value;
    formData["alamat"] = document.getElementById("alamat").value;
    return formData;
}

// Function tambah data ke tabel
function inputTabel(data) {
    var table = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idsupplier;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.namesup;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.telp;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.alamat;
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
    document.getElementById("idsupplier").value = "";
    document.getElementById("namesup").value = "";
    document.getElementById("telp").value = "";
    document.getElementById("alamat").value = "";
    pilihRow = null;
}

// Function Edit Data
function edit(td) {
    pilihRow = td.parentElement.parentElement;
    document.getElementById("idsupplier").value = pilihRow.cells[0].innerHTML;
    document.getElementById("namesup").value = pilihRow.cells[1].innerHTML;
    document.getElementById("telp").value = pilihRow.cells[2].innerHTML;
    document.getElementById("alamat").value = pilihRow.cells[3].innerHTML;
}

// Function Update data
function updatedata(formData) {
    pilihRow.cells[0].innerHTML = formData.idsupplier;
    pilihRow.cells[1].innerHTML = formData.namesup;
    pilihRow.cells[2].innerHTML = formData.telp;
    pilihRow.cells[3].innerHTML = formData.alamat;
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
    if (document.getElementById("idsupplier").value == "") {}
    return isValid;
}