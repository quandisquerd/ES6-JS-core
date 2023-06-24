
import { useEffect, useState } from '../../../lib'
import foooters from '../../../nav/foooters'
import headers from '../../../nav/headers'

const user = () => {
  const [data3, setData3] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((response) => response.json())
      .then((data) => setData3(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:3000/skill')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])
  return `
<a href="/admin" id="exit"><i class="fa-solid fa-xmark"></i></a>
<a href="/edit" id="edit"><i class="fa-solid fa-pen-to-square"></i></a>
   <section id="features" class="features">

  <h3>About</h3>
      <div class="container" data-aos="fade-up">

        <div class="row">
         
          <div class="image col-lg-6" style='background-image: url("${data3.map((data) => data.img).join('')}");' data-aos="fade-right"></div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="100">
            <div class="icon-box mt-5 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
              <i class="bx bx-receipt"></i>
              <h4>${data3.map((data) => data.name).join('')}</h4>
              <p>${data3.map((data) => data.names).join('')}</p>
            </div>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
              <i class="bx bx-cube-alt"></i>
              <h4>${data3.map((data) => data.address).join('')}</h4>
              <p>${data3.map((data) => data.ADDRESS).join('')}</p>
            </div>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
             <i class="fa-solid fa-user-doctor"></i>
              <h4>${data3.map((data) => data.Education).join('')}</h4>
              <p>${data3.map((data) => data.education).join('')}</p>
            </div>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
            <i class="fa-solid fa-school"></i>
              <h4>${data3.map((data) => data.school).join('')}</h4>
              <p>${data3.map((data) => data.schools).join('')}</p>
            </div>
            <div class="icon-box mt-5" data-aos="zoom-in" data-aos-delay="150">
           <i class="fa-solid fa-cake-candles"></i>
              <h4>${data3.map((data) => data.date).join('')}</h4>
            
            </div>
          </div>
        </div>


      </div>
    </section>
   <section id="about" class="about">
      <div class="container" data-aos="fade-up"> 
      <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="https://vn.sutublog.com/files/2018/01/Programming-Languages-768x528.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
            <h3>Skill</h3>
            <p>Here are the languages ​​that I already know</p>
            <ul>
${data.map((data) => `
 
              <li><i class="ri-check-double-line"></i> ${data.name}</li>
          
`).join('')}
           
            </ul>
           <p>I hope it will be more</p>
          </div>
        </div>

      </div>
    </section>
    

  `
}

export default user