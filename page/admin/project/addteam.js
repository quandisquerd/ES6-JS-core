import headerAdmin from "../../../componrnt/headerAdmin"
import { router, useEffect } from "../../../lib"
import axios  from "axios"

const addteam = () => {
  useEffect(() => {
    const ten = document.querySelector('#ten')
    const chuc = document.querySelector('#chuc')
    const fb = document.querySelector('#fb')
    const git = document.querySelector('#git')
    const inta = document.querySelector('#inta')
    const form = document.querySelector('.form')
    const image = document.getElementById("project-img");
    console.log(chuc)
    form.addEventListener("submit", async(e) => {
      e.preventDefault();
      const urls = await uploadFile(image.files)
      const newdata = {
        name: ten.value,
        desc: chuc.value,
        img:urls,
        link: [
          {
            "id": "fb",
            "name": "URL Facebook",
            icon: "<i class='fa-brands fa-facebook'></i>",
            path:fb.value

          },
          {
            "id": "git",
            "name": "URL Github",
            icon: "<i class='fa-brands fa-github'></i>",
            path: git.value

          },
          {
            "id": "inta",
            "name": "URL Intagram",
            icon: "<i class='fa-brands fa-instagram'></i>",
            path: inta.value

          }

        ]
      }
      fetch('http://localhost:3000/team', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata)
      }).then(() => router.navigate('/listteam'))
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
   <h3>Add Team</h3>
   <form class="form">

<label >Name</label>
    <input id="ten" type="text" value=""><br>
    <label >Service</label>
    <input id="chuc" type="text" value=""><br>
    <label >URL Facebook</label>
    <input id="fb" type="text" value=""><br><br>
    <label >URL Github</label>
    <input id="git" type="text" value=""><br><br>
    <label >URL Intagram</label>
    <input id="inta" type="text" value=""><br><br>



</select><br><br>

     <label >Image</label>
     <input type="file" id="project-img" value="" multiple ><br><br><br>
    <button class="btn" id="submit">Submit</button>


   </form>
  </div>
  </div>
  `
}

export default addteam   