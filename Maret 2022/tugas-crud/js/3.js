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
    formData["namepem"] = document.getElementById("namepem").value;
    formData["jk"] = document.getElementById("jk").value;
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
    cell1.innerHTML = data.idpem;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.namepem;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.jk;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.telp;
    cell5 = newRow.insertCell(4)
    cell5.innerHTML = data.alamat;
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
    document.getElementById("idpem").value = "";
    document.getElementById("namepem").value = "";
    document.getElementById("jk").value = "- Jenis Kelamin -";
    document.getElementById("telp").value = "";
    document.getElementById("alamat").value = "";
    pilihRow = null;
}

// Function Edit Data
function edit(td) {
    pilihRow = td.parentElement.parentElement;
    document.getElementById("idpem").value = pilihRow.cells[0].innerHTML;
    document.getElementById("namepem").value = pilihRow.cells[1].innerHTML;
    document.getElementById("jk").value = pilihRow.cells[2].innerHTML;
    document.getElementById("telp").value = pilihRow.cells[3].innerHTML;
    document.getElementById("alamat").value = pilihRow.cells[4].innerHTML;
}

// Function Update data
function updatedata(formData) {
    pilihRow.cells[0].innerHTML = formData.idpem;
    pilihRow.cells[1].innerHTML = formData.namepem;
    pilihRow.cells[2].innerHTML = formData.jk;
    pilihRow.cells[3].innerHTML = formData.telp;
    pilihRow.cells[4].innerHTML = formData.alamat;
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