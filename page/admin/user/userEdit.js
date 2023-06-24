import { router, useEffect, useState } from "../../../lib"
import axios from "axios"

const userEdit = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then(response => response.json())
            .then(data => setdata(data))
    }, [])
    useEffect(() => {
        const form = document.querySelector('.form')
        const btn = document.getElementById("submit");
        const name = document.getElementById("ten");
        const map = document.getElementById("map");
        const nghe = document.getElementById("nghe");
        const lam = document.getElementById("lam");
        const mail = document.getElementById("mail");
        const dt = document.getElementById("dt");
        const sn = document.getElementById("sn");
        const image = document.getElementById("project-img");
        form.addEventListener("submit", async(e) => {
            e.preventDefault()
            const urls = await uploadFile(image.files)
            const newUser = {
                name: name.value,
                address: map.value,
                Education: nghe.value,
                school: lam.value,
                email: mail.value,
                phone: dt.value,
                date:sn.value,
                img: urls
            }
            fetch('http://localhost:3000/user/' + '1', {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser)
            }).then(() => {
                router.navigate('/user');
            })
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


    return /*html*/`
  <div class="edituser">
   <h3>Edit User</h3>
   <form class="form">
${data.map((data) =>/*html*/`
<label >Họ và Tên</label>
    <input id="ten" type="text" value="${data.name}"><br>
    <label >Địa Chỉ</label>
    <input id="map" type="text" value="${data.address}"><br>
    <label >Nghề Nghiệp</label>
    <input id="nghe" type="text" value="${data.Education}"><br>
    <label >Nơi Làm Việc</label>
    <input id="lam" type="text" value="${data.school}"><br>
    <label >Email</label>
    <input id="mail" type="text" value="${data.email}"><br>
    <label >Phone</label>
    <input id="dt" type="text" value="${data.phone}"><br>
    <label >Birthday</label>
    <input id="sn" type="text" value="${data.date}"><br>
`).join('')}
     <label >Image</label>
     <input type="file" id="project-img" value="" multiple ><br><br><br>
    <button class="btn" id="submit">Submit</button>
    
   
   </form>
  </div>
 
  
  `
}

export default userEdit