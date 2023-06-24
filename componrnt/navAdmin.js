import { useEffect, useState } from "../lib"
import { jsPDF } from "jspdf";
const navAdmin = () => {
    const [data,setdata]= useState([]);
    useEffect(()=>{

        fetch('http://localhost:3000/listMenu')
        .then(response => response.json())
        .then(data=>setdata(data))
    },[])
 
  return `
  ${data.map(data=>`<li><a href="${data.path}">${data.name}</a></li>`).join('')}
 
  `
}
export default navAdmin