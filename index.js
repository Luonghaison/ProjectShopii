const listData = [
    {price: 30000, img: "./imgItem/1.jpg", name: 'Quần nỉ xinh xinh'},
    {price:  40000, img: "./imgItem/2.jpg", name: 'Quần thun ống rộng'},
    {price:  10000, img: "./imgItem/3.jpg", name: 'Bộ trắng răng siêu sạch'},
    {price:  36000, img: "./imgItem/4.jpg", name: 'Bộ áo thun Guuz'},
    {price:  29000, img: "./imgItem/5.jpg", name: 'Áo thun dáng rộng kute'},
    {price:  50000, img: "./imgItem/6.jpg", name: 'Bộ nhẫn cực xinh'},
    {price:  70000, img: "./imgItem/7.jpg", name: 'Đồng hồ thông minh cho bé yêu'},
    {price:  90000, img: "./imgItem/8.jpg", name: 'Thảm trải nhà cực ngầu lòi'},
    {price:  23000, img: "./imgItem/9.jpg", name: 'Áo thun siêu chất'},
    {price:  56000, img: "./imgItem/10.jpg", name: 'Áo bóng chày hotboy'},
    {price:  46000, img: "./imgItem/11.jpg", name: 'Giày búp bê sokute'},
    {price:  24000, img: "./imgItem/12.jpg", name: 'Áo phông pro'},
    {price:  54000, img: "./imgItem/13.jpg", name: 'Bộ nỉ cao cấp'},
    {price:  12000, img: "./imgItem/14.jpg", name: 'Giày búp bê xinh'},
    {price:  32000, img: "./imgItem/15.jpg", name: "Dép tổ bố"},
    {price:  26000, img: "./imgItem/16.jpg", name: 'Bộ đồ chơi siukiu'},
    {price:  14000, img: "./imgItem/17.jpg", name: 'Túi khủng bố'},
    {price:  54000, img: "./imgItem/18.jpg", name: 'Áo hot gơ'},
    {price:  23000, img: "./imgItem/19.jpg", name: 'Kính ngổ ngáo'},
    {price:  56000, img: "./imgItem/20.jpg", name: 'Áo chất lòi'},
    {price:  43000, img: "./imgItem/21.jpg", name: 'Áo thun bờ rồ'},
    {price:  25000, img: "./imgItem/22.jpg", name: 'Áo thun hót gơ'},
    {price:  30000, img: "./imgItem/23.jpg", name: 'Bộ nỉ siêu xinh'},
    {price:  46000, img: "./imgItem/24.jpg", name: 'Tai nghe neko chan'},
    {price:  34000, img: "./imgItem/25.jpg", name: 'Áo thun hot boy'},
    {price:  46000, img: "./imgItem/26.jpg", name: 'Đèn pin thủ nhỏ'},
    {price:  26000, img: "./imgItem/27.jpg", name: 'Giày ninza'},
    {price:  43000, img: "./imgItem/28.jpg", name: 'Áo sumorai'},
    {price:  25000, img: "./imgItem/29.jpg", name: 'Áo thun nổi loạn'},
    {price:  34000, img: "./imgItem/30.jpg", name: 'Dép của xuka'},
    {price:  24000, img: "./imgItem/31.webp", name: 'Điện Thoại Samsung fake'},
    {price:  46000, img: "./imgItem/32.jpg", name: 'Túi chanel fake'},
    {price:  95000, img: "./imgItem/33.jpg", name: "Tablet apple"},
    {price:  32000, img: "./imgItem/34.jpg", name: "Túi chà neo"},
    {price:  23000, img: "./imgItem/35.jpg", name: "Iphone chạy android"},
    {price:  43000, img: "./imgItem/36.jpg", name: "Áo choàng siu nhơn"},
    {price:  15000, img: "./imgItem/37.jpg", name: "Dép cá sấu"},
    {price:  75000, img: "./imgItem/38.jpg", name: 'Quần khủng bố'},
    {price:  34000, img: "./imgItem/39.jpg", name: 'Dày nike fake'},
    {price:  46000, img: "./imgItem/40.jpg", name: 'Điện thoại bờ rồ'},
    {price:  28000, img: "./imgItem/08e7cde87558dd0b684181e6d7666df3_tn.jpg", name: 'Giày pháp thuật'},
    {price:  64000, img: "./imgItem/8.jpg", name: 'Thảm thần kỳ'},

]

let contenItem=document.getElementsByClassName('contentItem')

let html=''
for(let i=0; i<listData.length-20; i++){
    html+=` <div style="display: " class="item">
            <div class="img">
                <img src="${listData[i].img}" height="320" width="320"/>
            </div>
            <span>${listData[i].name}</span>
            <div class="price">
                <span>${listData[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")} VND</span>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>`
}
contenItem[0].innerHTML=html


function dangky(){
    window.location.href = "Register.html"
}
function dangnhap(){
    window.location.href = "login.html"
}

// su kien render name user
let boolLogin = localStorage.getItem("boolLogin")
let checkLogin = JSON.parse(boolLogin)
if(checkLogin==true){
    let account = JSON.parse( localStorage.getItem("accountLogin"))
    signIn.style.display = "none"
    let name = account[0].email.slice(0,-10)
    signUp.innerText = `Hello ${name}`
    logOut.style.display ="block"
}else {
    logOut.style.display ="none"
}

// su kien logout
logOut.addEventListener('click',()=>{
    let answer = confirm("may co chac dang cuat khong")
    console.log(answer)
    if(answer==true){
        localStorage.setItem("boolLogin",JSON.stringify(false))
        window.location.href = "Index.html"
    }

})

function timKiem(){

    var x = document.getElementById("timkiem").value;
    if(x == ""){
        document.querySelector(".gioithieu").style.display = ""

    }else {
        document.querySelector(".gioithieu").style.display = "none"
    }
    let list = document.querySelectorAll(".item")
    list.forEach((item)=>{
        if(item.innerText.trim().toLowerCase().includes(x.trim().toLowerCase())){
            item.style.display = "block"

        }else {
            item.style.display = "none"
        }

    })
}




