import headerAdmin from "../../../componrnt/headerAdmin"
import { router, useEffect, useState } from "../../../lib"
import axios from "axios"

const editteam = ({ id }) => {
    const [data, setdata] = useState([])
    const [data1, setdata1] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/team/' + id)
            .then(response => response.json())
            .then(data => setdata(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/team/' + id)
            .then(response => response.json())
            .then(data => setdata1(data.link))
    }, [])
    useEffect(() => {
        const fb = document.querySelector('#fb')
        const git = document.querySelector('#git')
        const inta = document.querySelector('#inta')
        const name = document.querySelector('#ten')
        const chuc = document.querySelector('#chuc')
        const form = document.querySelector('.form')
        const image = document.getElementById("project-img");
        form.addEventListener('submit', async(e) => {
            e.preventDefault();
            const urls = await uploadFile(image.files)
            const newdata = {
                name:name.value,
                desc:chuc.value,
                link: [

                    {
                        "id": "git",
                        "name": "URL Github",
                        "icon": "<i class='fa-brands fa-github'></i>",
                        path: git.value
                    },
                    {
                        "id": "fb",
                        "name": "URL Facebook",
                        "icon": "<i class='fa-brands fa-facebook'></i>",
                        path: fb.value
                    },
                    {
                        "id": "inta",
                        "name": "URL Intagram",
                        "icon": "<i class='fa-brands fa-instagram'></i>",
                        path: inta.value
                    }
                ],
                img:urls

            }
            fetch('http://localhost:3000/team/'+id,{
                method: 'PUT',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(newdata)
            }).then(()=>router.navigate('/listteam'))
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
   <h3>Edit Team</h3>
   <form class="form">

<label >Name</label>
    <input id="ten" type="text" value="${data.name}"><br>
    <label >Service</label>
    <input id="chuc" type="text" value="${data.desc}"><br>
${data1.map(data => `
     <label >${data.name}</label>
    <input id="${data.id}" type="text" value="${data.path}"><br><br>
`).join('')}


</select><br><br>

     <label >Image</label>
       <input type="file" id="project-img" value="" multiple ><br><br><br>
    <button class="btn" id="submit">Submit</button>



   </form>
  </div>
  </div>

  `
}

export default editteam