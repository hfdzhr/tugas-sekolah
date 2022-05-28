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
    formData["no"] = document.getElementById("no").value;
    formData["nama"] = document.getElementById("nama").value;
    formData["umur"] = document.getElementById("umur").value;
    formData["jabatan"] = document.getElementById("jabatan").value;
    return formData;
}

// Function tambah data ke tabel
function inputTabel(data) {
    var table = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.no;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nama;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.umur;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.jabatan;
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
    document.getElementById("no").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("umur").value = "";
    document.getElementById("jabatan").value = "";
    pilihRow = null;
}

// Function Edit Data
function edit(td) {
    pilihRow = td.parentElement.parentElement;
    document.getElementById("no").value = pilihRow.cells[0].innerHTML;
    document.getElementById("nama").value = pilihRow.cells[1].innerHTML;
    document.getElementById("umur").value = pilihRow.cells[2].innerHTML;
    document.getElementById("jabatan").value = pilihRow.cells[3].innerHTML;

}

// Function Update data
function updatedata(formData) {
    pilihRow.cells[0].innerHTML = formData.no;
    pilihRow.cells[1].innerHTML = formData.nama;
    pilihRow.cells[2].innerHTML = formData.umur;
    pilihRow.cells[3].innerHTML = formData.jabatan;
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
    if (document.getElementById("no").value == "") {}
    return isValid;
}