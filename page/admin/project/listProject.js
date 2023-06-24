
import headerAdmin from '../../../componrnt/headerAdmin'
import { router, useEffect, useState } from '../../../lib'

const listProject = () => {
    const [data,setdata]=useState([])
    useEffect(() =>{
        fetch('http://localhost:3000/project')
        .then((response) =>response.json())
        .then(data=>setdata(data))

    },[])
    useEffect(() => {
        const btns = document.querySelectorAll("#button")
        console.log(btns)
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", (e) => {
               e.preventDefault()
          
                    const newData = data.find(data => data.id != id)
                    setdata(newData);
                    fetch('http://localhost:3000/project/' + id, {
                        method: 'DELETE'
                    })
                        .then(() => router.navigate('/listproject'))
           

                

            })
        }

    })
  return `
    <div id="tong">

  ${headerAdmin()}
 
  <div class="main">
  <table class="table" cellspacing="1px" boder="1px solid black" >
    <thead>
      <th>STT</th>
      <th>NAME</th>
 
      <th>DESC</th>
      <th>IGM</th>
      <th>TIME</th>
      <th></th>

    </thead>
    <tbody>
      
      ${data.map((data, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
   
         <td>${data.desc}</td>
        <td id="td"><img src="${data.img}"></td>
        <td>${data.time}</td>
        <td><button id="button" class="btn btn-remove" data-id="${data.id}">DELETE</button> <a href="/${data.id}/editproject"><button class="btn btn-edit">EDIT</button></a></td>
        </tr>
      `).join('')}

    </tbody>
  </table>
  </div>
  </div>


  `
}

export default listProject