
import headerAdmin from "../../componrnt/headerAdmin"
import { useEffect, useState } from "../../lib"
import foooters from "../../nav/foooters"
import headers from "../../nav/headers"


const project = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/project')
      .then((response) => response.json())
      .then(data => setdata(data))
  }, [])
  return /*html*/`
  ${headers()}
<h3 class="pro">PROJECT</h3>
<div class="container d-flex justify-content-center mt-100">

  <div class="row">
  ${data.map(data => `
  <div class="col-md-3">
      <div class="product-wrapper mb-45 text-center">
        <div class="product-img"> <a href="#" data-abc="true"> <img src="${data.img}" alt=""> </a>
          <span class="text-center"><i class="fa fa-rupee"></i>${data.name}</span>
          <div class="product-action">
            <div class="product-action-style"> <a href="/${data.id}/project"> <i class="fa-solid fa-link"></i> </a> <a href="#"> <i
                  class="fa fa-heart"></i> </a>  </div>
          </div>
        </div>
      </div>
    </div>
  
  
  `).join('')}
    
   </div>
</div>

${foooters()}
  
  `
}

export default project