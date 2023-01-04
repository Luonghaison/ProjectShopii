function trangchu() {
    window.location.href = "Index.html"
}

function dangky() {
    window.location.href = "Register.html"

}


email.addEventListener('input', () => {

    if (email.value == '') {
        emailerror.style.visibility = 'visible'
        emailerror.innerText = 'Email không được để trống'
    } else if (!email.value.match(/^\S+@\S+\.\S+$/)) {
        emailerror.style.visibility = 'visible'
        emailerror.innerText = 'Tên email không đúng định dạng'
    } else {
        emailerror.style.visibility = 'hidden'
    }
})
password.addEventListener('input', () => {

    if (password.value == '') {
        passworderror.style.visibility = 'visible'
        passworderror.innerText = 'Password không được để trống'
    } else if (password.value.length < 6) {
        passworderror.style.visibility = 'visible'
        passworderror.innerText = 'Password phải nhiều hơn 6 ký tự'
    } else {
        passworderror.style.visibility = 'hidden'
    }

})

login.addEventListener('click', () => {
    let datalogin = [{
        email: email.value,
        password: password.value
    }]


        let value= localStorage.getItem("dataUser")
        let data = JSON.parse(value)
        console.log(1)
        for (let i = 0; i < data.length; i++) {
            if (data[i].email != datalogin[0].email && data[i].password != datalogin[0].password){
                document.getElementById("emailerror").style.visibility = 'visible'
                emailerror.innerText = 'Email chưa được đăng ký'
                document.getElementById("passworderror").style.visibility = 'visible'
                passworderror.innerText = 'Password không đúng'
            }
            if (data[i].email != datalogin[0].email) {
                document.getElementById("emailerror").style.visibility = 'visible'
                emailerror.innerText = 'Email chưa được đăng ký'

            }
            if (data[i].password != datalogin[0].password) {
     document.getElementById("passworderror").style.visibility = 'visible'
                passworderror.innerText = 'Password không đúng'
            }
            if (data[i].email == datalogin[0].email && data[i].password == datalogin[0].password) {
                localStorage.setItem("boolLogin",JSON.stringify(true))
                localStorage.setItem("accountLogin",JSON.stringify(datalogin))
                localStorage.setItem("current" , `${datalogin[0].email}` )
                window.location.href = "Index.html"
            }
        }


})
