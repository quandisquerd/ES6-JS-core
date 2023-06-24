import { useEffect } from "../lib"


const catPage = ({ data1, onclick }) => { 
  
  useEffect(()=>{
    const btns= document.querySelectorAll(".btn")
    const all = document.querySelectorAll("#allpot")
    const pot = document.querySelectorAll("#pot")

    for(let btn of btns) {
      const id= btn.dataset.id;
      btn.addEventListener('click',function(){
        
    
        onclick(id);
        
      })
    }
    
  })
    
  return `
 
    ${data1.map((data)=> `
      <li class="btn" data-id="${data.id}">${data.name}</li>
    `).join('')}
  `
}

export default catPage