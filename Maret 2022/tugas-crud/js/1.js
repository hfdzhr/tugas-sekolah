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
    formData["idbarang"] = document.getElementById("idbarang").value;
    formData["namebarang"] = document.getElementById("namebarang").value;
    formData["harga"] = document.getElementById("harga").value;
    formData["stok"] = document.getElementById("stok").value;
    formData["idsup"] = document.getElementById("idsup").value;
    return formData;
}

// Function tambah data ke tabel
function inputTabel(data) {
    var table = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.idbarang;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.namebarang;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.harga;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stok;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.idsup;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<button class="btn btn-warning btn-sm" onclick="edit(this)">
<i class="bi bi-pencil-square"></i>
</button>
    <button class="btn btn-danger btn-sm" onclick="hapus(this)">
    <i class="bi bi-trash"></i>
</button>`;
}

// Function Reset Setelah Tambah Data
function reset() {
    document.getElementById("idbarang").value = "";
    document.getElementById("namebarang").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("stok").value = "";
    document.getElementById("idsup").value = "";
    pilihRow = null;
}

// Function Edit Data
function edit(td) {
    pilihRow = td.parentElement.parentElement;
    document.getElementById("idbarang").value = pilihRow.cells[0].innerHTML;
    document.getElementById("namebarang").value = pilihRow.cells[1].innerHTML;
    document.getElementById("harga").value = pilihRow.cells[2].innerHTML;
    document.getElementById("stok").value = pilihRow.cells[3].innerHTML;
    document.getElementById("idsup").value = pilihRow.cells[4].innerHTML;
}

// Function Update data
function updatedata(formData) {
    pilihRow.cells[0].innerHTML = formData.idbarang;
    pilihRow.cells[1].innerHTML = formData.namebarang;
    pilihRow.cells[2].innerHTML = formData.harga;
    pilihRow.cells[3].innerHTML = formData.stok;
    pilihRow.cells[4].innerHTML = formData.idsup;
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
    if (document.getElementById("idbarang").value == "") {}
    return isValid;
}