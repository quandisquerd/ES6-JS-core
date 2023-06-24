import { useEffect, useState } from "../lib"
import navAdmin from "./navAdmin"

const headerAdmin = () => {
    const [data,serdata]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/user')
        .then(response => response.json())
        .then(data=>serdata(data))
    },[])

  
  return `
  <div class="header">
  <div class="img">
  <img src="${data.map(data=>`${data.img}`).join('')}">
  </div>
  
  ${navAdmin()}
  </div>
  `
}

export default headerAdmin