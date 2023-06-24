import { useEffect, useState } from "../../../lib"


const homeAdmin = () => {
  const [data,setdata]=useState([]);
  const [data1, setdata1] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/nut')
    .then(response => response.json())
    .then(data=>setdata(data))
  },[])
  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then(response => response.json())
      .then(data => setdata1(data))
  }, [])

  return /*html*/`
 <div class="om">
 
   <div class="container1">
    <img src="${data1.map(data=>`${data.img}`).join('')}">
<div class="button">
${data.map((data) =>` <a href="${data.path}"><button class="btn">${data.name}</button></a>`).join('')}
 

</div>
   </div>
 </div>
    
  `
}

export default homeAdmin