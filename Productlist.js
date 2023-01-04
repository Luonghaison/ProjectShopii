

function render(){
    if (localStorage.getItem("boolLogin") == "true"){
        let result = ''
        let value = localStorage.getItem(`${localStorage.getItem(`current`)}`)
        let array = JSON.parse(value)
        for ( let i=0 ; i < array.length ; i++){
            result += `
        <div class="sp"  style="display: flex">
        <div><img src="${array[i].img}" alt="" width="200px" ></div>
        <div class="gia">
            <div>${array[i].name}</div>
            <div>${array[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")} VND</div>
        </div style="">
        <input type="number" min="1" value="1" >
        <div style="    display: flex;
    flex-direction: column;">
        <button class="tt">Thanh Toán</button>
        <button class="xx" onclick="delete1(${i})" >Xóa</button>
        </div>
    </div>
    `
        }

        document.getElementById("listProduct").innerHTML = result
    }else if (localStorage.getItem("boolLogin") == "false") {
        document.getElementById("listProduct").innerHTML = '<h1>Vui lòng đăng nhập</h1>'

    }
}
render()
function delete1(i) {
        let value =  localStorage.getItem(`${localStorage.getItem("current")}`)
        let data = JSON.parse(value)
        data.splice(i,1)
        localStorage.setItem(`${localStorage.getItem("current")}` , JSON.stringify(data) )
    render()
}
function home() {
    window.location.href ="Index.html"
}




