// fake data

const data = [
    {
        id: 1,
        image: "./images/item11.jpg",
        name: "Điện thoại iPhone 14 Pro Max 128GB",
        price: 2100000
    },
    {
        id: 2,
        image: "./images/item12.jpg",
        name: "Điện thoại Xiaomi Redmi 12 4GB",
        price: 1900000
    },
    {
        id: 3,
        image: "./images/item13.jpg",
        name: "Điện thoại Samsung Galaxy A14 6GB",
        price: 1320000
    },
    {
        id: 4,
        image: "./images/item14.jpg",
        name: "Điện thoại iPhone 14 Pro 128GB",
        price: 3620000
    },
    {
        id: 5,
        image: "./images/item15.jpg",
        name: "Điện thoại Samsung Galaxy A24 6GB ",
        price: 9820000
    },
    {
        id: 6,
        image: "./images/item16.jpg",
        name: "Điện thoại Vivo Y36",
        price: 6231000
    },
    {
        id: 7,
        image: "./images/item17.jpg",
        name: "Điện thoại Xiaomi Redmi 12C 64GB",
        price: 3265000
    },
    {
        id: 8,
        image: "./images/item18.jpg",
        name: "Điện thoại OPPO Reno8 T 5G 256GB",
        price: 1023000
    },
    {
        id: 9,
        image: "./images/item19.jpg",
        name: "Điện thoại Samsung Galaxy S23 Ultra 5G 256GB",
        price: 2030000
    },
    {
        id: 10,
        image: "./images/item20.jpg",
        name: "Điện thoại realme C55 6GB",
        price: 1890000
    }
]

// render data



var elementCard = document.querySelector(".wrapper-product");
const renderData = data.map((item)=>{
    return `<div class="product__card">
    <img onclick="handlePagination(${item.id})" src=${item.image} alt="item">
    <p>${item.name}</p>
    <p>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    <div>
        <button onclick="handleOrder(${item.id})">Mua ngay</button>
    </div>
</div>`
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


