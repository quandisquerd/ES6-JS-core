
import headerAdmin from '../../../componrnt/headerAdmin'
import { router, useEffect, useState } from '../../../lib'

const listCat = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then((response=>response.json()))
        .then(data=>setdata(data))

    },[])
useEffect(()=>{
    const buttons = document.querySelectorAll('#button');
    console.log(buttons)
    for(let but of buttons){
        const id = but.dataset.id;
        console.log(id)
        but.addEventListener("click",(e)=>{
          e.preventDefault();
       
            const ok = confirm("Bạn chắc chắn muốn xóa nó chứ ???");
            if (ok === true) {
              const newdata = data.filter(data => data.id != id)
              setdata(newdata);
              fetch('http://localhost:3000/categories/' + id, {
                method: 'DELETE'
              }).then(() => router.navigate('/listcat'))
            }
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
  
      <th></th>

    </thead>
    <tbody>
      
      ${data.map((data, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
        <td><button id="button" class="btn btn-remove" data-id="${data.id}">DELETE</button> <a href="/${data.id}/editcat"><button class="btn btn-edit">EDIT</button></a></td>
        </tr>
      `).join('')}

    </tbody>
  </table>
  </div>
  </div>


  `
}

export default listCat