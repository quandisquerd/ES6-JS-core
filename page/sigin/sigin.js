import { router, useEffect, useState } from "../../lib"
import foooters from "../../nav/foooters"
import headers from "../../nav/headers"


const sigin = () => {
    const [data,setdata]= useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/login')
        .then(response => response.json())
        .then(data=>setdata(data))
    },[])

    useEffect(()=>{
        const user = document.querySelector("#user");
        const pass = document.querySelector("#pass")
       
      const submit = document.querySelector(".btn")
        submit.addEventListener("click", ()=>{
         data.forEach(data => {
                if(data.user==user.value && data.pass==pass.value){
                        router.navigate("/admin")
                }else{
                  alert("Bạn cần có tài khoản ADMIN hãy liên hệ ADMIN để có nó!!")
                }
         });
            
        })
    })
  return /*html*/`
    ${headers()}

    <div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="fadeIn first">
      <h1 class="logo me-auto me-lg-0"><a href="/#/">Dq<span>.</span></a></h1>
    </div>

    <!-- Login Form -->
    <form>
      <input type="text" id="user" class="fadeIn second" name="login" placeholder="login">
      <input type="password" id="pass" class="fadeIn third" name="login" placeholder="password">
      <button class="btn">Sigin</button>
    </form>

    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
  ${foooters()}
  `
}

export default sigin