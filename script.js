// fake data

const smartphone = [
    {
        id: 1,
        image: "./images/item1.png",
        name: "iPhone 14 Pro 128GB",
        price: 24950000,
        brand: "iphone",
        qty: 10
    },
    {
        id: 2,
        image: "./images/item21.png",
        name: "iPhone 12 Pro 128GB",
        price: 19820000,
        brand: "iphone",
        qty: 10
    },
    {
        id: 3,
        image: "./images/item22.png",
        name: "iPhone 11",
        price: 15860000,
        brand: "iphone",
        qty: 10
    },
    {
        id: 4,
        image: "./images/item18.png",
        name: "iPhone 13 Pro 96GB",
        price: 16520000,
        brand: "iphone",
        qty: 10
    },
    {
        id: 5,
        image: "./images/item19.png",
        name: "iPhone 8 Pro 256GB",
        price: 9680000,
        brand: "iphone",
        qty: 10
    },
    {
        id: 6,
        image: "./images/item6.png",
        name: "Samsung Redmi 12 4GB",
        price: 19650000,
        brand: "samsung",
        qty: 10
    },
    {
        id: 7,
        image: "./images/item7.png",
        name: "Samsung Galaxy A14 6GB",
        price: 13020000,
        brand: "samsung",
        qty: 10
    },
    {
        id: 8,
        image: "./images/item8.png",
        name: "Samsung Galaxy Lumia",
        price: 16200000,
        brand: "samsung",
        qty: 10
    },
    {
        id: 9,
        image: "./images/item9.png",
        name: "Samsung Note A24 6GB ",
        price: 19820000,
        brand: "samsung",
        qty: 10
    },
    {
        id: 10,
        image: "./images/item10.png",
        name: "Samsung Y36",
        price: 16231000,
        brand: "samsung",
        qty: 10
    },
    {
        id: 11,
        image: "./images/item11.png",
        name: "Xiaomi Redmi 12C 64GB",
        price: 8265000,
        brand: "xiaomi",
        qty: 10
    },
    {
        id: 12,
        image: "./images/item12.png",
        name: "Xiaomi Reno8 T 5G 256GB",
        price: 4023000,
        brand: "xiaomi",
        qty: 10
    },
    {
        id: 13,
        image: "./images/item13.png",
        name: "Xiaomi Galaxy S23 256GB",
        price: 5030000,
        brand: "xiaomi",
        qty: 10
    },
    {
        id: 14,
        image: "./images/item14.png",
        name: "Xiaomi realme C55 6GB",
        price: 6890000,
        brand: "xiaomi",
        qty: 10
    },
    {
        id: 15,
        image: "./images/item24.png",
        name: "Xiaomi realme C55 6GB",
        price: 7890000,
        brand: "xiaomi",
        qty: 10
    },
    {
        id: 16,
        image: "./images/item16.png",
        name: "Oppo realme C55 6GB",
        price: 15890000,
        brand: "oppo",
        qty: 10
    },
    {
        id: 17,
        image: "./images/item17.png",
        name: "Oppo Redmi 12C 64GB",
        price: 13265000,
        brand: "oppo",
        qty: 10
    },
    {
        id: 18,
        image: "./images/item18.png",
        name: "Oppo Reno8 T 5G 256GB",
        price: 14023000,
        brand: "oppo",
        qty: 10
    },
    {
        id: 19,
        image: "./images/item19.png",
        name: "Oppo Galaxy S23 256GB",
        price: 7030000,
        brand: "oppo",
        qty: 10
    },
    {
        id: 20,
        image: "./images/item20.png",
        name: "Oppo realme C55 6GB",
        price: 21890000,
        brand: "oppo",
        qty: 10
    },
    {
        id: 21,
        image: "./images/item21.png",
        name: "Realme realme C55 6GB",
        price: 11290000,
        brand: "huawei",
        qty: 10
    },
    {
        id: 22,
        image: "./images/item22.png",
        name: "Realme Redmi 12C 64GB",
        price: 8265000,
        brand: "huawei",
        qty: 10
    },
    {
        id: 23,
        image: "./images/item23.png",
        name: "Realme Reno8 T 5G 256GB",
        price: 6023000,
        brand: "huawei",
        qty: 10
    },
    {
        id: 24,
        image: "./images/item24.png",
        name: "Realme Galaxy S23 256GB",
        price: 12030000,
        brand: "huawei",
        qty: 10
    },
    {
        id: 25,
        image: "./images/item25.png",
        name: "Realme realme C55 6GB",
        price: 8890000,
        brand: "huawei",
        qty: 10
    },
]

localStorage.setItem("smartphone", JSON.stringify(smartphone));

const data = [
    {
        id: 1,
        image: "./images/item1.png",
        name: "iPhone 14 Pro 128GB",
        price: 2495000,
        brand: "iphone"
    },
    {
        id: 2,
        image: "./images/item21.png",
        name: "iPhone 12 Pro 128GB",
        price: 1982000,
        brand: "iphone"
    },
    {
        id: 3,
        image: "./images/item22.png",
        name: "iPhone 11",
        price: 15860000,
        brand: "iphone"
    },
    {
        id: 4,
        image: "./images/item18.png",
        name: "iPhone 13 Pro 96GB",
        price: 26520000,
        brand: "iphone"
    },
    {
        id: 5,
        image: "./images/item19.png",
        name: "iPhone 8 Pro 256GB",
        price: 9680000,
        brand: "iphone"
    },
    {
        id: 6,
        image: "./images/item6.png",
        name: "Samsung Redmi 12 4GB",
        price: 19650000,
        brand: "samsung"
    },
    {
        id: 7,
        image: "./images/item7.png",
        name: "Samsung Galaxy A14 6GB",
        price: 13020000,
        brand: "samsung"
    },
    {
        id: 8,
        image: "./images/item8.png",
        name: "Samsung Galaxy Lumia",
        price: 36200000,
        brand: "samsung"
    },
    {
        id: 9,
        image: "./images/item9.png",
        name: "Samsung Note A24 6GB ",
        price: 9820000,
        brand: "samsung"
    },
    {
        id: 10,
        image: "./images/item10.png",
        name: "Samsung Y36",
        price: 16231000,
        brand: "samsung"
    },
    {
        id: 11,
        image: "./images/item11.png",
        name: "Xiaomi Redmi 12C 64GB",
        price: 13265000,
        brand: "xiaomi"
    },
    {
        id: 12,
        image: "./images/item12.png",
        name: "Xiaomi Reno8 T 5G 256GB",
        price: 10023000,
        brand: "xiaomi"
    },
    {
        id: 13,
        image: "./images/item13.png",
        name: "Xiaomi Galaxy S23 256GB",
        price: 22030000,
        brand: "xiaomi"
    },
    {
        id: 14,
        image: "./images/item14.png",
        name: "Xiaomi realme C55 6GB",
        price: 1890000,
        brand: "xiaomi"
    },
    {
        id: 15,
        image: "./images/item24.png",
        name: "Xiaomi realme C55 6GB",
        price: 1890000,
        brand: "xiaomi"
    },
    {
        id: 16,
        image: "./images/item16.png",
        name: "Oppo realme C55 6GB",
        price: 1890000,
        brand: "oppo"
    },
    {
        id: 17,
        image: "./images/item17.png",
        name: "Oppo Redmi 12C 64GB",
        price: 13265000,
        brand: "oppo"
    },
    {
        id: 18,
        image: "./images/item18.png",
        name: "Oppo Reno8 T 5G 256GB",
        price: 10023000,
        brand: "oppo"
    },
    {
        id: 19,
        image: "./images/item19.png",
        name: "Xiaomi Galaxy S23 256GB",
        price: 22030000,
        brand: "oppo"
    },
    {
        id: 20,
        image: "./images/item20.png",
        name: "Oppo realme C55 6GB",
        price: 1890000,
        brand: "oppo"
    },
    {
        id: 21,
        image: "./images/item21.png",
        name: "Realme realme C55 6GB",
        price: 1890000,
        brand: "huawei"
    },
    {
        id: 17,
        image: "./images/item22.png",
        name: "Realme Redmi 12C 64GB",
        price: 13265000,
        brand: "huawei"
    },
    {
        id: 18,
        image: "./images/item23.png",
        name: "Realme Reno8 T 5G 256GB",
        price: 10023000,
        brand: "huawei"
    },
    {
        id: 19,
        image: "./images/item24.png",
        name: "Realme Galaxy S23 256GB",
        price: 22030000,
        brand: "huawei"
    },
    {
        id: 20,
        image: "./images/item25.png",
        name: "Realme realme C55 6GB",
        price: 1890000,
        brand: "huawei"
    },
]

// render data



var elementCard = document.querySelector(".wrapper-product");
const renderData = smartphone.map((item)=>{
    if(item.id % 2 === 0 && item.id != 2 && item.id != 4) {
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

const handlePagination = (id) => {
    window.location.href = `detail.html?index=${id}`;
}

// get data from input

var loginActive = localStorage.getItem("login");
if (!loginActive) {
    var cartRender = document.querySelector(".cart");
    cartRender.remove();
    console.log(cartRender);
}
console.log(loginActive);

var renderLogin = document.getElementById("account")
console.log(renderLogin);
if(loginActive !== null) {
    var dataLogin = JSON.parse(loginActive)
    renderLogin.innerHTML=`<ul id="account">
    <li><a href="profile.html">${dataLogin.name}</a></li>
    <span>/</span>
    <li><a onclick="handleLogout()">Đăng xuất</a></li>
</ul>`
}

// function logout

const handleLogout = () => {
    localStorage.removeItem('login');
    window.location.href = "index.html";
}

console.log(loginActive);

const handleGetItem = () => {
    var renderItem = document.querySelector(".item-card");
    var checkProduct = JSON.parse(localStorage.getItem('product'));
    if(checkProduct === null){
        renderItem.innerText = 0;
    }
    else {
        const filterUser = checkProduct.find((item)=>{
            return item.email === JSON.parse(loginActive).email
        })
        if(!filterUser){
            renderItem.innerText = `0`
        }
        else {
            const qty = filterUser.dataOrders.reduce((acc,cur)=>{
                return acc + cur.quality
            },0)
            renderItem.innerText = `${qty}`
        }
    }
}

handleGetItem();


const handleOrder = (id) => {
    if(loginActive === null) {
        alert("Xin vui lòng đăng nhập để mua hàng!")
        window.location.href="login.html"
    }
    else {
        var dataUserOrder = JSON.parse(loginActive);
        const item = data.find((value)=>{
            return value.id === id
        })
        console.log("=======item", item);
        item.quality = 1;
        // item.userEmail = dataUserOrder.email;
        var product = JSON.parse(localStorage.getItem("product"))
        console.log(item);
        // // console.log(product)
        if(product === null){
            localStorage.setItem('product', JSON.stringify([{
                email: dataUserOrder.email,
                dataOrders: [
                    item
                ]
            }]))
        }
        else{
            console.log(product);
            const checkUser = product.find((user)=>{
                return user.email === dataUserOrder.email
            })
            if (checkUser) {
                const checkItem = checkUser.dataOrders.find((item)=>{
                    return item.id === id;
                })
                console.log(checkItem);
                if(checkItem){
                    checkItem.quality += 1;
                }
                else{
                    product.find((value)=>{
                        if(value.email === dataUserOrder.email){
                            value.dataOrders.push(item)
                        }
                    })
                }
            }
            else{
                item.email = dataUserOrder.email;

                product.push({
                    email: dataUserOrder.email,
                    dataOrders: [
                        item
                    ]
                })
            }
            localStorage.setItem('product', JSON.stringify(product))
        }
        handleGetItem();
    }
    // kiem tra co product, bang  cach la get Item
    //  => null => push len cai [{}]
    // ko null thi convert tk lay ve => push len cai mang
}


