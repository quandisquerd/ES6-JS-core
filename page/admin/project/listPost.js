
import headerAdmin from '../../../componrnt/headerAdmin'
import { router, useEffect, useState } from '../../../lib'

const listPost = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((response => response.json()))
      .then(data => setdata(data))

  }, [])
  useEffect(() => {
    const btns = document.querySelectorAll("#button")
    console.log(btns)
    for (let btn of btns) {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        const ok = confirm("Bạn có thực sự muốn xóa!!!")
        if (ok === true) {
          const newData = data.find(data => data.id != id)
          setdata(newData);
          fetch('http://localhost:3000/posts/' + id, {
            method: 'DELETE'
          })
            .then(() => router.navigate('/listpost'))
        }else{
          
        }


      })
    }

  })
  return /*html*/`
  <div id="tong">

  ${headerAdmin()}
 
  <div class="main">
  <table class="table" cellspacing="1px" boder="1px solid black" >
    <thead>
      <th>STT</th>
      <th>TITLE</th>
       <th>CONTENT</th>
      <th>CONTENT_TYPE</th>
      <th>DESC</th>
      <th>IGM</th>
      <th>TIME</th>
      <th></th>

    </thead>
    <tbody>
      
      ${data.map((data, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${data.title}</td>
        <td>${data.content}</td>
        <td>${data.content_type}</td>
         <td id="desc">${data.desc}</td>
        <td id="td"><img src="${data.img[0]}"></td>
        <td>${data.date}</td>
        <td><button id="button" class="btn btn-remove" data-id="${data.id}">DELETE</button> <a href="/${data.id}/edit"><button class="btn btn-edit">EDIT</button></a></td>
        </tr>
      `).join('')}
      
    </tbody>
  </table>
  </div>
  </div>
  
  `
}

export default listPost