
function trangchu(){
    window.location.href = "Index.html"
}
function dangnhap(){
    window.location.href = "login.html"

}


// let Register = document.getElementById('btn-Register')
// Register.onclick =function register(){
//     console.log(1)
// }
// bat su kien dang kylet
email.addEventListener('input',()=>{
    let emailErro = document.querySelector(".auth-form_form span ")
    if(email.value==""){
        emailErro.style.visibility = "visible"
        emailErro.innerText = "Email can not be blank"
    }else if(!email.value.match(/^\S+@\S+\.\S+$/)){
        emailErro.style.visibility = "visible"
        emailErro.innerText = "Email wrong format!"
    }
    else{
        emailErro.style.visibility = "hidden"
    }
})
password.addEventListener('input', ()=>{
    if(password.value==""){
        passwordMSG.style.visibility = "visible"
        passwordMSG.innerText="password can not be blank"
    }else if(password.value.length<6){
        passwordMSG.style.visibility = "visible"
        passwordMSG.innerText="password need more than 6 character!"
    }else{
        passwordMSG.style.visibility = "hidden"
    }
})
comfirmPassword.addEventListener('input', ()=>{
    if(comfirmPassword.value!=password.value){
        Repassword.style.visibility= 'visible'
        Repassword.innerText='Mật khẩu nhập lại không chính xác'

    }else{Repassword.style.visibility='hidden'}

})

btnRegister.addEventListener("click",()=>{
    if(email.value.match(/^\S+@\S+\.\S+$/) &&password.value.length>=6 && comfirmPassword.value==password.value ){
        let dataUser =[{
            email:email.value,
            password:password.value,
            confirmPassword:comfirmPassword.value
        }]

        // lay du lieu tu localstorage qua key dataUser
        let data = localStorage.getItem("dataUser")

       if(!data){
           // day du lieu len localstorage voi key la "dataUser và value la dataUser
           if (localStorage.getItem(`${dataUser[dataUser.length-1].email}`) == null){
               localStorage.setItem(`${dataUser[dataUser.length-1].email}`, 0)
           }
           localStorage.setItem("dataUser",JSON.stringify(dataUser))
           window.location.href = "login.html"
       } else {

           let userData = JSON.parse(data)
           let flag = true;
           for(let i =0;i<userData.length;i++){
               if(userData[i].email==dataUser[0].email){
                   flag = false;
                   break;
               }
           }

           if(flag==false){
               let emailErro = document.querySelector(".auth-form_form span ")
               emailErro.style.visibility = "visible"
               emailErro.innerText = "Email exist"
           }else {
              let newArr =  userData.concat(dataUser)
               console.log(newArr)
               localStorage.setItem("dataUser",JSON.stringify(newArr))
               if (localStorage.getItem(`${dataUser[dataUser.length-1].email}`) == null){
                   localStorage.setItem(`${dataUser[dataUser.length-1].email}`, 0)
               }
                window.location.href = "login.html"
           }

       }

    }



    // let emailErro = document.querySelector(".auth-form_form span ")
    //
    // if(dataUser.email==""){
    //   emailErro.style.visibility = "visible"
    //     emailErro.innerText = "Email can not be blank"
    // }else if(!dataUser.email.match(/^\S+@\S+\.\S+$/)){
    //     emailErro.style.visibility = "visible"
    //     emailErro.innerText = "Email wrong format!"
    // }









})
