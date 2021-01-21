var product = [{
        id: "sp3",
        name: "GA CHOI 1/2",
        img: "imgs/gachoi.jpg",
        price: 400000
    },
    {
        id: "sp4",
        name: "HAI SAN HON HOP",
        img: "imgs/honhop.jpg",
        price: 200000
    },
    {
        id: "sp5",
        name: "HEO NUONG ONG TRE",
        img: "imgs/lonnuongongtre.jpg",
        price: 122000 + "/ong"
    },
    {
        id: "sp6",
        name: "MUC SOT XA OT",
        img: "imgs/múcot.jpg",
        price: 34000
    },
    {
        id: "sp7",
        name: "Tom Hum Hai San",
        img: "imgs/tomhumhaisan.jpg",
        price: 150000
    },
    {
        id: "sp8",
        name: "CA MU HAP",
        img: "imgs/camuhap.jpg",
        price: 9000000
    },
    {
        id: "sp9",
        name: "GA HAP XOI",
        img: "imgs/gahapxoi.jpg",
        price: 100000
    },
    {
        id: "sp10",
        name: "GA LUOC",
        img: "imgs/galuoc.png",
        price: 100000
    },
    {
        id: "sp11",
        name: "HEO RUNG",
        img: "imgs/lonrung.jpg",
        price: 350000
    },
    {
        id: "sp12",
        name: "MUC LUOC",
        img: "imgs/mucluoc.jpg",
        price: 12000 + "/1c"
    },
    {
        id: "sp13",
        name: "TOM NUONG NGUYEN CON",
        img: "imgs/tomnuong.jpg",
        price: 122000
    },
    {
        id: "sp14",
        name: "GA NHA NUONG NGUYEN CON",
        img: "imgs/ganuong.jpg",
        price: 150000
    },
    {
        id: "sp15",
        name: "RAN XA",
        img: "imgs/ranxao.jpg",
        price: 120000
    },
    {
        id: "sp16",
        name: "BA BA SAM CHUOI",
        img: "imgs/baba.jpg",
        price: 145000
    },


];
var productProduct = function() {
    var listproduct1 = "";
    for (var i = 0; i < product.length; i++) {
        var data = JSON.parse(JSON.stringify(product[i]))
        listproduct1 +=
            `<tr>
    <td> ${ data.id}  </td>
    <td> ${ data.name}  </td>
    <td><img src="${ data.img }" alt="" style="width: 50px;"></td>
    <td> ${data.price}  </td>
    <td><button onclick="updateProduct( ${i})" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>
    <button onclick="deleteProduct(${i})" class = "btn ml-1 btn-outline-warning"><i class="fas  fa-trash"></i></button></td>
    </tr>`;

    }
    document.getElementById("product-admin").innerHTML = listproduct1;
}

// Thêm sản phẩm
var addProduct = function() {
    var Product = {
        id: "SP" + parseInt(product.length + 1),
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        price: document.getElementById("price").value
    }
    product.push(Product);
    localStorage.setItem('listProduct1', JSON.stringify(product));
    window.location.reload();
}
var deleteProduct = function(i) {
    product.splice(i, 1);
    localStorage.setItem('listProduct1', JSON.stringify(product));
    window.location.reload();
}

// chỉnh sửa sản phẩm
var updateProduct = function(i) {
    var k = product[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("priced").value = k.price;
    document.getElementById("idd").setAttribute("disabled", "disabled");
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')">Đồng ý <button>';
}

// gửi phần chỉnh sửa sản phẩm
var submitUpdate = function(i) {
    var k = product[i];
    k.id = document.getElementById("idd").value;
    k.name = document.getElementById("named").value;
    k.img = document.getElementById("imgd").value;
    k.price = document.getElementById("priced").value;
    // document.getElementById("idd").setAttribute("disabled", "disabled");
    localStorage.setItem('listProduct1', JSON.stringify(product));
    //Save();
    window.location.reload();

}

function Save() {
    localStorage.setItem('listProduct1', JSON.stringify(product))
}

function load() {
    product = JSON.parse(localStorage.getItem('listProduct1'));
    productProduct();
}
if (localStorage.getItem("listProduct1") != null) {
    load();
}