var product = [{
        id: "sp1",
        name: "Cua Hoang De",
        img: "imgs/cuahoangde.jpg",
        note: "Size :1.7kg - 4kg/con (Bán chạy nhất từ 2kg - 3kg/con)",
        price: 1400000
    },
    {
        id: "sp2",
        name: "TOM SU BAM TOI",
        img: "imgs/tomsu.png",
        note: "",
        price: 300000
    },
    {
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


]

function save() {
    localStorage.setItem('listProduct1', JSON.stringify(product));
}

function load() {
    product = JSON.parse(localStorage.getItem('listProduct1'));
}
if (localStorage.getItem('listProduct1') != null) {
    load();
} else
    save();






function listWatch() {
    for (let i in product) {
        var data = JSON.parse(JSON.stringify(product[i]))
        var prinf =
            `<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">										
        <div class="produre_box bg-white shadow-sm">										
            <div class="image_box">										
                <img src="` + data.img + `" style="width:260px; height:200px;">										
            </div>										
                <div class="info_box p-3 bg-white">										
                    <p class="float-left font-weight-bold mb-0" style="font-size: 115%">` + data.name + `</p><p class="float-left font-weight-bold mb-2" style="font-size: 115%">` + data.price + `đ</p>									
                        <div style="clear: both;"></div>										
                            <div class="star_box float-left pt-2">										
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onclick="getProduct(${i})">Chi Tiết</button>	                            
                                    <div class="order_box float-right" style=" float:right" >										
                                        <div class="order_button float-right pt-2">										
                                            <a class="btn btn-info btn-add-to-cart" >										
                                                <i class="fas fa-shopping-cart" aria-hidden="true"></i>										
                                            </a>										
                                        </div>										
                                    </div>	
                                <div  class="modal fade mt-5" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >										
                                    <div class="modal-dialog" role="diolog" style="width:30%; >										
                                        <div class="modal-content">										
                                            <div class="modal-body" style="background:rgb(199,226,78); ">										
                                                <div id="printf_watch">	

                                                </div>										
                                            </div>										
                                        </div>										
                                    </div>										
                                </div>										
                            </div>	                          														
                            <div style="clear: both;"></div>																				
                </div>
        </div>										
    </div>`;

        document.getElementById("trending").innerHTML += prinf;

    }

}

listWatch();
var getProduct = function(id) {
    let html = "";
    let allWatch = JSON.parse(localStorage.getItem('listproduct'))

    let aa = allWatch[id];
    document.getElementById("printf_watch").innerHTML = `${html}<img src="${aa.img}" style="width:300px ;height:300px">  <div style="font-size:20px">${aa.name}<div> <b>Giá: ${aa.price}đ    
    `;
}

function IcoinFunction() {
    var x = document.getElementById("navbarCollapse");
    if (x.className === "topNarbar") {
        x.className += " responsive";
    } else {
        x.className = "topNarbar";
    }
}