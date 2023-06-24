import { useEffect } from "../lib"


const allcat = ({ data1, onclick }) => {

    useEffect(() => {
 
        const all = document.querySelector("#all")
     

        
            all.addEventListener('click', function () {

                
                onclick();

            })
        })



    return `
  <li class="btn" id="all">All</li>
    
  `
}

export default allcat