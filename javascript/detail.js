var currentLocation = window.location.href;
var param = currentLocation.slice(-1);

// fake data id = 1

const data = [
    {
        id: 1,
        image: "./images/item1.jpg",
        name: "iPhone 14 Pro 128GB",
        price: 2100000
    },
    {
        id: 2,
        image: "./images/item2.jpg",
        name: "Xiaomi Redmi 12 4GB",
        price: 1900000
    },
    {
        id: 3,
        image: "./images/item3.jpg",
        name: "Samsung Galaxy A14 6GB",
        price: 1320000
    },
    {
        id: 4,
        image: "./images/item4.jpg",
        name: "iPhone 14 Pro 128GB",
        price: 3620000
    },
    {
        id: 5,
        image: "./images/item7.png",
        name: "Samsung Galaxy A24 6GB ",
        price: 9820000
    },
    {
        id: 6,
        image: "./images/item6.png",
        name: "Điện thoại Xiaomi Y36",
        price: 6231000
    },
    {
        id: 7,
        image: "./images/item7.png",
        name: "Xiaomi Redmi 12C 64GB",
        price: 3265000
    },
    {
        id: 8,
        image: "./images/item8.png",
        name: "OPPO Reno8 T 5G 256GB",
        price: 1023000
    },
    {
        id: 9,
        image: "./images/item9.png",
        name: "Samsung Galaxy S23 256GB",
        price: 2030000
    },
    {
        id: 10,
        image: "./images/item10.png",
        name: "Điện thoại realme C55 6GB",
        price: 1890000
    }
]

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
const sameProduct = data.filter((value)=>{
   return (
        ((product.price-500000) < value.price) && ((product.price+500000) > value.price) && value.id !== product.id
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
        <p>${item.price}</p>
    </div>`
    )
})

elementProduct.innerHTML = renderProduct.join(" ");


