import headerAdmin from "../../../componrnt/headerAdmin"
import { router, useEffect, useState } from "../../../lib"
import moment from 'moment-timezone'
import axios from "axios"

const editproject = ({id}) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/project/'+id)
            .then((response) => response.json())
            .then(data => setdata(data))

    }, [])

    useEffect(() => {
        const form = document.querySelector('.form')
        const btn = document.getElementById("submit");
        const name = document.getElementById("ten");
        const map = document.getElementById("map");
        const nghe = document.getElementById("nghe");
        const lam = document.getElementById("lam");
        const image = document.getElementById("project-img");
        const desc = document.getElementById("desc")
        const mota = document.getElementById("descs")
        form.addEventListener("submit", async (e) => {
            const vietnamDate = moment().tz("Asia/Ho_Chi_Minh").format('MM/DD/YYYY  HH:mm:ss');
            e.preventDefault();
            const urls = await uploadFile(image.files)
            const newMap = {
                name: name.value,
                time: vietnamDate,
                mota:mota.value,
                img: urls,
              
              
                desc: desc.value,
                technology: [
                    {
                        "name": "Javascript",
                        "icon": "<i class='fa-brands fa-js'></i>"
                    },
                    {
                        "name": "HTML",
                        "icon": "<i class='fa-brands fa-html5'></i>"
                    },
                    {
                        "name": "CSS",
                        "icon": "<i class='fa-brands fa-css3-alt'></i>"
                    }
                ]

            }
            fetch('http://localhost:3000/project/' + id, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMap)
            }).then(() => router.navigate('/listproject'))

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
  return `
  <div class="oom">
  ${headerAdmin()}
   <div class="editpost">
   <h3>Edit Post</h3>
   <form class="form">

<label >Title</label>
    <input id="ten" type="text" value="${data.name}"><br>
   
    <label >DESC</label>
    <input id="desc" type="text" value="${data.desc}"><br>
<label >Describe</label></label>
    <input id="descs" type="text" value="${data.mota}"><br>


     <label >Image</label>
       <input type="file" id="project-img" value="" multiple ><br><br><br>
    <button class="btn" id="submit">Submit</button>


   </form>
  </div>
  </div>
  `
}

export default editproject