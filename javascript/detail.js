var currentLocation = window.location.href;
var param = currentLocation.slice(-1);

// fake data id = 1

const data = [
    {
        id: 1,
        image: "./images/item11.jpg",
        name: "Điện thoại iPhone 14 Pro Max 128GB",
        price: 2100000,
        description: "iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, đi kèm theo đó là thiết kế hình màn hình mới."
    },
    {
        id: 2,
        image: "./images/item12.jpg",
        name: "Điện thoại Xiaomi Redmi 12 4GB",
        price: 1900000,
        description: "Xiaomi Redmi 12 khoác lên mình một vẻ ngoài cá tính, màn hình lớn đem đến trải nghiệm đã mắt cùng một hiệu năng ổn định với mọi tác vụ."
    },
    {
        id: 3,
        image: "./images/item13.jpg",
        name: "Điện thoại Samsung Galaxy A14 6GB",
        price: 1320000,
        description: "Samsung Galaxy A14 4G với thiết kế độc đáo và hiện đại, sản phẩm này đáp ứng đầy đủ tiêu chí ngon - bổ - rẻ với cấu hình ổn định và giá cả cực kỳ hợp lý."
    },
    {
        id: 4,
        image: "./images/item14.jpg",
        name: "Điện thoại iPhone 14 Pro 128GB",
        price: 3620000,
        description: "iPhone 14 Pro 128GB - Mẫu smartphone đến từ nhà Apple được mong đợi nhất năm 2022, lần này nhà Táo mang đến cho chúng ta một phiên bản với kiểu thiết kế hình notch mới."
    },
    {
        id: 5,
        image: "./images/item15.jpg",
        name: "Điện thoại Samsung Galaxy A24 6GB ",
        price: 9820000,
        description: "Samsung Galaxy A24 6GB nổi bật với giá thành rẻ, màn hình Super AMOLED cùng camera 50 MP chụp ảnh sắc nét."
    },
    {
        id: 6,
        image: "./images/item16.jpg",
        name: "Điện thoại Vivo Y36",
        price: 6231000,
        description: "Vivo Y36 chiếc điện thoại Vivo Y sở hữu vẻ ngoài hiện đại trẻ trung, màn hình hiển thị sắc nét cùng một hiệu năng ổn định với các tác vụ hằng ngày."
    },
    {
        id: 7,
        image: "./images/item17.jpg",
        name: "Điện thoại Xiaomi Redmi 12C 64GB",
        price: 3265000,
        description: "Xiaomi Redmi 12C 64GB một thiết bị di động tầm trung được giới thiệu bởi Xiaomi, với cấu hình vượt trội so với các đối thủ trong cùng phân khúc."
    },
    {
        id: 8,
        image: "./images/item18.jpg",
        name: "Điện thoại OPPO Reno8 T 5G 256GB",
        price: 1023000,
        description: "Tiếp nối sự thành công rực rỡ đến từ các thế hệ trước đó thì chiếc OPPO Reno8 T 5G 256GB cuối cùng đã được giới thiệu chính thức tại Việt Nam, được định hình là dòng sản phẩm thuộc phân khúc tầm trung."
    },
    {
        id: 9,
        image: "./images/item19.jpg",
        name: "Điện thoại Samsung Galaxy S23 Ultra 5G 256GB",
        price: 2030000,
        description: "Samsung Galaxy S23 Ultra 5G 256GB là chiếc smartphone cao cấp nhất của nhà Samsung, sở hữu cấu hình không tưởng với con chip khủng được Qualcomm tối ưu riêng cho dòng Galaxy."
    },
    {
        id: 10,
        image: "./images/item20.jpg",
        name: "Điện thoại realme C55 6GB",
        price: 1890000,
        description: "Gần đây, chiếc điện thoại realme C55 đã được giới thiệu chính thức với bộ thông số kỹ thuật đáng chú ý và giá cả phù hợp cho người dùng."
    }
]

const product = data.find((item)=>{
    return item.id == param
})
console.log(product);

var elementCard = document.querySelector(".product");
elementCard.innerHTML = `<div><img src=${product.image} alt="item1"></div>
<div class="product__content">
    <h1>${product.name}</h1>
    <span>Giá:</span>
    <span>${product.price}</span>
    <button>Mua hàng</button>
    <p>Giới thiệu</p>
    <p>${product.description}</p>
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


