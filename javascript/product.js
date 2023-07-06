var getURL = window.location.href;
const getData = JSON.parse(localStorage.getItem("smartphone"));
console.log(getURL);
console.log(getData);
let samsung = getURL.includes("samsung");
let apple = getURL.includes("apple");
let xiaomi = getURL.includes("xiaomi");
let oppo = getURL.includes("oppo");
let huawei = getURL.includes("huawei");

var elementCard = document.querySelector(".wrapper-product");
const renderData = getData.map((item)=>{
    if(samsung === true && item.brand === "samsung") {
        return `<div class="product__card">
        <img onclick="handlePagination(${item.id})" src=${item.image} alt="item">
        <p>${item.name}</p>
        <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div>
            <button onclick="handleOrder(${item.id})">Mua ngay</button>
        </div>
    </div>`
    }
    if(apple === true && item.brand === "iphone") {
        return `<div class="product__card">
        <img onclick="handlePagination(${item.id})" src=${item.image} alt="item">
        <p>${item.name}</p>
        <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div>
            <button onclick="handleOrder(${item.id})">Mua ngay</button>
        </div>
    </div>`
    }
    if(xiaomi === true && item.brand === "xiaomi") {
        return `<div class="product__card">
        <img onclick="handlePagination(${item.id})" src=${item.image} alt="item">
        <p>${item.name}</p>
        <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div>
            <button onclick="handleOrder(${item.id})">Mua ngay</button>
        </div>
    </div>`
    }
    if(oppo === true && item.brand === "oppo") {
        return `<div class="product__card">
        <img onclick="handlePagination(${item.id})" src=${item.image} alt="item">
        <p>${item.name}</p>
        <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div>
            <button onclick="handleOrder(${item.id})">Mua ngay</button>
        </div>
    </div>`
    }
    if(huawei === true && item.brand === "huawei") {
        return `<div class="product__card">
        <img onclick="handlePagination(${item.id})" src=${item.image} alt="item">
        <p>${item.name}</p>
        <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div>
            <button onclick="handleOrder(${item.id})">Mua ngay</button>
        </div>
    </div>`
    }
})
elementCard.innerHTML = renderData.join(" ");