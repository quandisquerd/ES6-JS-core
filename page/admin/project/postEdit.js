import headerAdmin from "../../../componrnt/headerAdmin"
import { router, useEffect, useState } from '../../../lib'
import moment from 'moment-timezone'
import axios from "axios"
import * as yup from "yup"
const postEdit = ({id}) => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/posts/'+id)
            .then((response => response.json()))
            .then(data => setdata(data))

    }, [])
  const [data1, setdata1] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((response => response.json()))
      .then(data => setdata1(data))

  }, [])
    useEffect(()=>{
    
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
      const userTypeSelect = document.getElementById('user-type-select')
      form.addEventListener("submit",async(e)=>{
        const vietnamDate = moment().tz("Asia/Ho_Chi_Minh").format('MM/DD/YYYY  HH:mm:ss');
        e.preventDefault();
        const urls = await uploadFile(image.files)
        try {

          const formData = new FormData(form);
          const values = Object.fromEntries(formData.entries());
          await schema.validate(values, { abortEarly: false });
          const newMap = {
            title: name.value,
            date: vietnamDate,
            content: map.value,
            content_type: nghe.value,
            img: urls,
            categoryId: userTypeSelect.value,
            id: "Negdx6V",
            desc: desc.value

          }
          fetch('http://localhost:3000/posts/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMap)
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
    })
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
   <h3>Edit Post</h3>
   <form class="form">

<label >Title</label>
    <input id="ten" type="text" value="${data.title}" name="title"><br>
    <label >Content</label>
    <input id="map" type="text" value="${data.content}" name="content"><br>
    <label >Content_type</label>
    <input id="nghe" type="text" value="${data.content_type}" name="content_type"><br>
    <label >DESC</label>
    <input id="desc" type="text" value="${data.desc}" name="desc"><br>
<label >Category</label>
<select name="categoryId" id="user-type-select">
${data1.map(data => `
<option value="${data.id}" id="${data ? data.id : ''}" class="tencat" data-id="${data.id}">${data.name}</option>
`).join('')}

</select><br><br>


     <label >Image</label>
       <input type="file" id="project-img" value="" multiple  name="img"><br><br><br>
        <span id="error-list"></span>
    <button class="btn" id="submit">Submit</button>


   </form>
  </div>
  </div>
  `
}

export default postEdit