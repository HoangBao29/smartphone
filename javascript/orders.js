var loginActive = JSON.parse(localStorage.getItem("login"));
var renderLogin = document.getElementById("account")
console.log(renderLogin);
if(loginActive !== null) {
    renderLogin.innerHTML=`<ul id="account">
    <li><a href="profile.html">${loginActive.name}</a></li>
    <span>/</span>
    <li><a onclick="handleLogout()">Đăng xuất</a></li>
</ul>`
}
const handleLogout = () => {
    localStorage.removeItem('login');
    window.location.href = "index.html";
}
if (loginActive === null) {
    alert("Xin vui lòng đăng nhập để xem giỏ hàng của bạn!")
    window.location.href="login.html"
}
else {
    var total = 0;
    var quality = 0;
    const dataGetOrder = JSON.parse(localStorage.getItem("product"));
    console.log(dataGetOrder);
    const checkUser = dataGetOrder.find((item)=>{
        return item.email === loginActive.email
    })
    // console.log(checkUser)

    const renderTable = document.querySelector(".table")
    const dataRender = checkUser?.dataOrders
    console.log(dataRender);
    const renderOrder = dataRender.map((item,index)=>{
        quality += item.quality;
        total += item.price;
        return `<tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td style="width:20%"><div><img src=${item.image} alt="image"></div></td>
                <td>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                <td>${item.quality}</td>
                <td>${(item.price*item.quality).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
              </tr>`
    }

    
    )
    renderTable.innerHTML += renderOrder.join(" ");


    renderTable.innerHTML += `<tr style="font-weight: 600">
                                <td></td>
                                <td>Tổng hóa đơn</td>
                                <td></td>
                                <td></td>
                                <td>${quality}</td>
                                <td>${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            </tr>`
}