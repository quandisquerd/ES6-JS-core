import headerAdmin from "../../../componrnt/headerAdmin"
import { router, useEffect, useState } from "../../../lib";
import moment from 'moment-timezone'
import axios from 'axios'
import * as yup from "yup"

const addPost = () => {
   const [data,setdata]=useState([]);
   useEffect(()=>{
    fetch('http://localhost:3000/categories')
    .then(response => response.json())
    .then(data => setdata(data))
   },[])
    useEffect(() => {
        const schema = yup.object().shape({
            title: yup.string().required("Bạn cần nhập title !!!"),
            content: yup.string().required("Bạn cần nhập content !!!"),
            content_type: yup.string().required("Bạn cần nhập content_type !!!"),
            img: yup.string().required("Bạn cần có img !!!"),
            categoryId: yup.string().required("Bạn cần có categoryId !!!"),
            desc: yup.string().required("Bạn cần có desc !!!"),
        });
        const form = document.querySelector('.form')
        const btn = document.getElementById("submit");
        const name = document.getElementById("ten");
        const map = document.getElementById("map");
        const nghe = document.getElementById("nghe");
        const lam = document.getElementById("lam");
        const image = document.getElementById("project-img");
        const desc = document.getElementById("desc")
       console.log(image);
        const userTypeSelect = document.getElementById('user-type-select')
    


          
            form.addEventListener("submit",async(e)=>{
               
                    const vietnamDate = moment().tz("Asia/Ho_Chi_Minh").format('MM/DD/YYYY  HH:mm:ss');
                    e.preventDefault();
                const urls = await uploadFile(image.files)



                try {

                    const formData = new FormData(form);
                    const values = Object.fromEntries(formData.entries());
                    await schema.validate(values, { abortEarly: false });
                    const newData = {
                        title: name.value,
                        date: vietnamDate,
                        content: map.value,
                        content_type: nghe.value,

                        img: urls,
                        categoryId: userTypeSelect.value,
                        desc: desc.value


                    }
                    fetch('http://localhost:3000/posts', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newData)
                    }).then(() => router.navigate('/listpost'))
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
            // const uploadFile=async(files)=>{
            //     const coudname ="dw6wgytc3";
            //     const presetname ="demo_upload";
            //     const folder= "ECMA";
            //     const urls=[];
            //     const api =`https://api.cloudinary.com/v1_1/${coudname}/image/upload`;
            //     const formdata=new FormData();
            //     formdata.append("upload_preset",presetname);
            //     formdata.append("folder",folder);
            //     for(const file of files){
            //         formdata.append("file",file);
            //         const response= await axios(api,formdata,{
            //             headers:{"Content-Type":"multipart/form-data"}
            //         })
            //         console.log(response)
            //     }
            //     return(urls)

            // }
        const uploadFile = async (files) => {
            const CLOUD_NAME = 'dw6wgytc3';
            const PRESET_NAME = 'demo_upload';
            const FORDER_NAME = 'ECMA';
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

            const formData = new FormData();
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FORDER_NAME)

            for (const file of files) {
                formData.append("file", file);

                const response = await axios.post(api, formData, {

                    headers: { "Content-Type": "multipart/form-data" }

                })
                urls.push(response.data.secure_url)

            }
            return (urls)
        }
    
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
   <h3>Add Post</h3>
   <form class="form">

<label >Title</label>
    <input id="ten" type="text" value="" name="title" class=""><br>
    <label >Content</label>
    <input id="map" type="text" value="" name="content"><br>
    <label >Content_type</label>
    <input id="nghe" type="text" value="" name="content_type"><br><br>
<label >Category</label>
<select name="categoryId" id="user-type-select">
${data.map(data=>`
<option value="${data.id}" id="${data?data.id:''}" class="tencat" data-id="${data.id}">${data.name}</option>
`).join('')}
    
</select><br><br>
 <label >DESC</label>
    <input id="desc" type="text" value="" name="desc"><br>
     <label >Image</label>
    <input type="file" id="project-img" value="" multiple name="img"><br><br><br>
        <span id="error-list"></span>
    <button class="btn" id="submit">Submit</button>


   </form>
  </div>
  </div>
    `
}

export default addPost