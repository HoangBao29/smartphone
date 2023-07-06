var loginActive = JSON.parse(localStorage.getItem("login"));
console.log(loginActive);

var renderLogin = document.getElementById("account")
console.log(renderLogin);
if(loginActive !== null) {
    renderLogin.innerHTML=`<ul id="account">
    <li><a href="profile.html">${loginActive.name}</a></li>
    <span>/</span>
    <li><a onclick="handleLogout()">Đăng xuất</a></li>
</ul>`
}

var currentLocation = window.location.href;
var param = currentLocation.split('=')[1];

console.log(param);
console.log(currentLocation);

// fake data id = 1

const data = JSON.parse(localStorage.getItem("smartphone"))
console.log(data);

const product = data.find((item)=>{
    return item.id == param
})
console.log(product);

var elementCard = document.querySelector(".product");
elementCard.innerHTML = `<div><img src=${product.image} alt="item1"></div>
<div class="product__content">
    <h1 style="font-size: 36px">Tên sản phẩm: ${product.name}</h1>
    <span class="custom">Giá:</span>
    <span class="custom">${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
    <div class='technical'>
                        <p>Thông số kỹ thuật:</p>
                        <ul>
                            <li>
                                <i class="bi bi-display"></i>
                                <span> 6.43 inch, AMOLED, FHD+, 1080 x 2400 Pixels</span>
                            </li>
                            <li>
                                <i class="bi bi-camera"></i>
                                <span>64.0 MP + 2.0 MP + 2.0 MP</span>
                            </li>
                            <li>
                                <i class="bi bi-camera-video"></i>
                                <span>16.0 MP</span>
                            </li>
                            <li>
                                <i class="bi bi-cpu"></i>
                                <span>Snapdragon 695</span>
                            </li>
                            <li>
                                <i class="bi bi-memory"></i>
                                <span>128 GB</span>
                            </li>
                            <li>
                                <i class="bi bi-battery-half"></i>
                                <span>4000 mAh</span>
                            </li>
                        </ul>
    </div>
    <div class="custom-but"><button>Mua ngay</button></div>
</div>`

// render product same price 

const sameProduct = data.filter((value)=>{
   return (
        ((product.price-2000000) < value.price) && ((product.price+2000000) > value.price) && value.id !== product.id
   )
})
console.log(sameProduct);
console.log(product.price);

var elementProduct = document.querySelector(".wrapper-card");
const renderProduct = sameProduct.map((item)=>{
    return (
        `<div class="card">
        <img src=${item.image} alt="item2">
        <p>${item.name}</p>
        <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    </div>`
    )
})

elementProduct.innerHTML = renderProduct.join(" ");

// render product same brand

const productBrand = data.filter((value)=>{
    return (
        value.brand === product.brand
    )
 })

 
 var elementBrand = document.querySelector(".wrapper-brand");
 const renderBrand = productBrand.map((item)=>{
     return (
         `<div class="card">
         <img src=${item.image} alt="item2">
         <p>${item.name}</p>
         <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
     </div>`
     )
 })
 
 elementBrand.innerHTML = renderBrand.join(" ");


