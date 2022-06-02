var pilihRow = null;

function tambah() {
    if (validasi()) {
        var formData = readData();

        if (pilihRow == null)
            inputTabel(formData);
    }
}
var i = 0;

function readData() {
    Hide()
    var formData = {};
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    i++;
    formData['nomor'] = `${i}`
    formData['nama'] = firstname
    formData["fullname"] = `${firstname} ${lastname}`;
    formData["msg"] = document.getElementById("msg").value;
    return formData;
}


// Function tambah data ke tabel
function inputTabel(data) {

    var table = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomor;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.msg;
    alert(data.nama)
}

function alert(nama) {
    swal({
        title: `Thank You ${nama}`,
        text: "Thank you for giving your message",
        icon: "success",
        button: "OK",
    });
}

function validasi() {
    isValid = true;
    if (document.getElementById("firstname").value == "") {}
    return isValid;
}

function Hide() {
    tampilan = document.querySelector('.tampilan')
    tampilan.style.display = 'block'
}