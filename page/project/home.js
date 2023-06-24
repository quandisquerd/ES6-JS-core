

import allcat from '../../componrnt/allcat'
import allpage from '../../componrnt/allpage'
import catPage from '../../componrnt/catPage'
import postPage from '../../componrnt/postPage'
import { useEffect, useState } from '../../lib'
import foooters from '../../nav/foooters'
import headers from '../../nav/headers'
import { jsPDF } from "jspdf";

const home = () => {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  const [data5, setData5] = useState([])
  const [post, setPost] = useState([])
  const [post1, setPost1] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((response) => response.json())
      .then((data) => setData3(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => setData1(data))
  }, [])
  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(response => response.json())
      .then((data) => setData(data))

  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/team')
      .then(response => response.json())
      .then((data) => setData4(data))

  }, [])
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then((data) => setData2(data))





  }, [])

  useEffect(() => {


  })





  const handoClick = (id) => {
    fetch(`http://localhost:3000/categories/${id}?_embed=posts`)
      .then(response => response.json())
      .then(data =>
        setPost(data.posts)
      )

  }
  useEffect(() => {

    const all = document.getElementById('all')
    const pot = document.querySelector('#allpot')
    console.log(pot)
    all.addEventListener('click', (e) => {
      if (post) {
        return setPost([])
      }
    })
  })
  useEffect(() => {
    const btns = document.querySelectorAll(".btn")
    const all = document.querySelectorAll("#allpot")
    const pot = document.querySelectorAll("#pot")

    for (let btn of btns) {

      btn.addEventListener('click', function () {

        if (post1) {
          return setPost1([])
        }

      })
    }

  })
  const handoClick1 = () => {
    fetch(`http://localhost:3000/posts`)
      .then(response => response.json())
      .then(data => {
        setPost1(data)
      }

      )



  }

 
  return /*html*/`
  
    ${headers()}

  <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container" data-aos="fade-up">

      <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div class="col-xl-6 col-lg-8">
          <h1>Welcome to my world DQ<span>.</span></h1>
          <h2>VU DINH QUAN - Web design and development</h2>
        </div>
      </div>

      <div class="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
   
        
       
       </div>

    </div>
  </section>
   <main id="main">

    <!-- ======= About Section ======= -->
    
     <section id="features" class="features">
    
      <div class="container" data-aos="fade-up">
 <div class="section-title">
          <h2>About</h2>
          <p>Check our About</p>
        </div>
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
              <p>${data3.map((data) => ``).join('')}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

     
   

    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Posts</h2>
          <p>Check our Posts</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
             ${allcat({ onclick: handoClick1 })}
            ${catPage({ data1, onclick: handoClick })}
             
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          ${allpage({ post1 })}
    ${postPage({ post })}
  

    </section>

     

    
 <section id="team" class="team">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>

        <div class="row">
        ${data4.map((team) => `
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="100">
              <div class="member-img">
                <img src="${team.img}" class="img-fluid" alt="">
                <div class="social">
                ${team.link.map(data => `<a href="${data.path}">${data.icon}</a>`).join('')}
                  
                 
                </div>
              </div>
              <div class="member-info">
                <h4>${team.name}</h4>
                <span>${team.desc}</span>
              </div>
            </div>
          </div> 
          
        `).join('')}
          

          

      

      </div>
    </section>

${foooters()}


   

    
  `
}

export default home