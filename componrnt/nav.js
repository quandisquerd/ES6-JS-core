import { useEffect, useState } from "../lib"


const nav = () => {
    const [data,setData]= useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/menu')
        .then(response=>response.json())
        .then(data=>setData(data))
    },[])
  return `
  ${data.map(({name,path})=> `<li><a href="${path}">${name}</a></li>`).join('')}
  
  `
}

export default nav