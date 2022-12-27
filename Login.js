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
    console.log(datalogin)
    if (password.value.length > 6 && email.value.match(/^\S+@\S+\.\S+$/)) {
        let value= localStorage.getItem("dataUser")
        let data = JSON.parse(value)

        for (let i = 0; i < data.length; i++) {
            if (data[i].email == datalogin[0].email && data[i].password == datalogin[0].password) {
                localStorage.setItem("boolLogin",JSON.stringify(true))
                localStorage.setItem("accountLogin",JSON.stringify(datalogin))
                window.location.href = "Index.html"
            } else if (data[i].email != datalogin[0].email) {
                email.style.visibility = 'visible'
                emailerror.innerText = 'Email chưa được đăng ký'

            } else if (data[i].password != datalogin[0].password) {
                passworderror.style.visibility = 'visible'
                passworderror.innerText = 'Password không đúng'
            }
        }
    }

})
