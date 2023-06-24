
import headerAdmin from '../../../componrnt/headerAdmin'
import { router, useEffect, useState } from '../../../lib'
import * as yup from "yup"
const catEdit = ({id}) => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categories/'+id)
        .then(response => response.json())
        .then(data=>setdata(data))
    },[])
    useEffect(()=>{
        const schema = yup.object().shape({
            name: yup.string().required("Bạn cần nhập dữ liệu !!!"),

        });
        const form = document.querySelector(".form")
        const btns = document.querySelector(".btn")
        const name= document.querySelector("#ten")
        form.addEventListener("submit",async(e)=>{
            e.preventDefault()
            try {

                const formData = new FormData(form);
                const values = Object.fromEntries(formData.entries());
                await schema.validate(values, { abortEarly: false });
            const newdata= {
                name:name.value
            
            
            }
            fetch('http://localhost:3000/categories/'+id,{
                method:"PUT",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(newdata)
            }).then(()=> router.navigate("/listcat"))
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
   <h3>Edit Category</h3>
   <form class="form">

<label >Name</label>
    <input id="ten" type="text" value="${data.name}" name="name"><br>



    <br><br>
    <span id="error-list"></span>
    <button class="btn" id="submit">Submit</button>


   </form>
  </div>
  </div>

  `
}

export default catEdit