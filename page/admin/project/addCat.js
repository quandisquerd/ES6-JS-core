import headerAdmin from "../../../componrnt/headerAdmin"
import { router, useEffect, useState } from "../../../lib"
import * as yup from "yup"

const addCat = () => {
    const [data,setdata]= useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then((response)=>response.json())
        .then(data=>setdata(data))
    },[])
    useEffect(()=>{
        const schema = yup.object().shape({
            name: yup.string().required("Bạn cần nhập dữ liệu !!!"),
            
        });
        const name= document.querySelector("#name")
        const form = document.querySelector("#form")
        const but=document.querySelector(".btn")
        console.log(name)
    
     
        form.addEventListener("submit",async(e)=>{
            const id =data.length+1
            e.preventDefault()
           
            
            try {
               
                const formData = new FormData(form);
                const values = Object.fromEntries(formData.entries());
                await schema.validate(values, { abortEarly: false });
                const newdata = {
                    id: `${id}`,
                    name: name.value

                }
                fetch('http://localhost:3000/categories', {
                    method: 'POST',
                    headers: { 'Content-Type': "application/json" },
                    body: JSON.stringify(newdata)
                }).then(() => router.navigate('/listcat'))
             
                    
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    const errors = {};
                    error.inner.forEach((e) => {
                        errors[e.path] = e.errors[0];
                    });
                    displayErrors(errors);
                } else {
                    console.error(error);
                }
            }
            
            
        })
    })
    function displayErrors(errors) {
        const errorList = document.getElementById('error-list');
        errorList.innerHTML = '';

        Object.keys(errors).forEach((key) => {
            const li = document.createElement('li');
            li.style.color = "red"
            li.innerText = errors[key];
            errorList.appendChild(li);
        });
    }
  return `
  <div class="oom">
  ${headerAdmin()}
     <div class="editpost">
   <h3>Add Categories</h3>
  <form id="form">
    <input id="name" type="text" name="name">
    <span id="error-list"></span>
    <button class="btn" >SUBMIT</button>
  </form></div></div>
  `
}

export default addCat