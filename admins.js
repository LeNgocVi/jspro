var admin = [

    {
        id: "01",
        username: "HAHA",
        name: "Le Ngoc Vi",
        sdt: "01234567",
        email: "vi.le@gmail.com",
        address: "Da Nang",
        role: "Quan li",
        password: "1"
            // action: "kiem tra"

    }, {
        id: "02",
        username: "HAHA",
        name: "Le Ngoc Vi",
        sdt: "01234567",
        email: "vi.le@gmail.com",
        address: "Da Nang",
        role: "admin",
        password: "2"
            // action: "kiem tra"

    },

];
var productAdmin = function() {
    var listadmin1 = "";
    for (var i = 0; i < product.length; i++) {
        var data = JSON.parse(JSON.stringify(admin[i]))
        console.log(data);
        listadmin1 +=
            `<tr>
    <td> ${ data.id}  </td>
    <td> ${ data.username}  </td>
    <td> ${ data.name}  </td>
    <td> ${ data.sdt}  </td>
    <td> ${ data.email}  </td>
    <td> ${ data.address}  </td>    
    <td> ${data.role}  </td>
    <td><button onclick="updateAdmin( ${i})" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>
    <button onclick="deleteAdmin(${i})" class = "btn ml-1 btn-outline-warning"><i class="fas  fa-trash"></i></button></td>
    </tr>`;

    }
    document.getElementById("user-admin").innerHTML = listadmin1;
}

// Them nguoi dung
var addAdmin = function() {
    var Admin = {
        id: "0" + parseInt(admin.length + 1),
        username: document.getElementById("username").value,
        name: document.getElementById("name").value,
        sdt: document.getElementById("sdt").value,
        email: document.getElementById("eamil").value,
        address: document.getElementById("address").value,
        role: document.getElementById("role").value,
        password: document.getElementById("password").value,
        // action: document.getElementById("action").value
    }

    admin.push(Admin);
    localStorage.setItem('listAdmin', JSON.stringify(admin));
    window.location.reload();
}

// xoa nguoi dung 
var deleteAdmin = function(i) {
    if (admin[i].role != "admin") {
        admin.splice(i, 1);
        localStorage.setItem('listAdmin', JSON.stringify(admin));
        window.location.reload();
    }
    if (admin[i].role == "admin") {
        alert("khong the xoa admin")
    }
}

// chỉnh sua nguoi dung
var updateAdmin = function(i) {
    var k = Admin[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("username").value = k.username,
        document.getElementById("name").value = k.name,
        document.getElementById("sdt").value = k.sdt,
        document.getElementById("eamil").value = k.email,
        document.getElementById("address").value = k.address,
        document.getElementById("role").value = k.role
    document.getElementById("password").value = k.password,

        document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')">Đồng ý <button>';
}

// gửi phần chỉnh sửa sản phẩm
var submitUpdate = function(i) {
    alert("cap nhat thanh cong")

    var k = admin[i];
    k.id = document.getElementById("idd").value,
        k.username = document.getElementById("usernamed").value,
        k.name = document.getElementById("named").value,
        k.sdt = document.getElementById("sdtd").value,
        k.email = document.getElementById("eamild").value,
        k.address = document.getElementById("addressd").value,
        k.role = document.getElementById("roled").value,
        k.password = document.getElementById("passwordd").value,
        // document.getElementById("idd").setAttribute("disabled", "disabled");
        localStorage.setItem('listAdmin', JSON.stringify(admin));
    //Save();
    window.location.reload();

}

function Save() {
    localStorage.setItem('listAdmin', JSON.stringify(admin))
}

function reload() {
    admin = JSON.parse(localStorage.getItem('listAdmin'));
    productAdmin();
}
if (localStorage.getItem("listAdmin") != null) {
    reload();
}