
import allcat from '../../componrnt/allcat'
import allpage from '../../componrnt/allpage'
import catPage from '../../componrnt/catPage'
import postPage from '../../componrnt/postPage'
import { useEffect, useState } from '../../lib'
import foooters from '../../nav/foooters'
import headers from '../../nav/headers'

const posts = () => {
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

  useEffect(function () {
    const btn = document.getElementById('btn-search');
    const texts = document.getElementById('search');
    btn.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = texts.value;
      if (text == '' || text == 'all') {
        console.log('quan')
        fetch('http://localhost:3000/posts')
          .then((response) => response.json())
          .then((data) => setData3(data))

      } else {
        const newData = data2.filter((posts) => posts.title.includes(text));
        setData5(newData);
      }
    })
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
        return (setPost([]),setData5([]))
       
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
          return (setPost1([]), setData5([]))
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


return `
  
  ${headers()}
 <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>
        <form id="btn-search">
            <input id="search" type="text" placeholder="Search">
            <button class="btn">Search</button>
        </form>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
      

      
            <ul id="portfolio-flters">
             ${allcat({ onclick: handoClick1 })}
            ${catPage({ data1, onclick: handoClick })}
             
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          ${allpage({ post1 })}
    ${postPage({ post })}
     ${data5.map(data => `
  <div class="col-lg-4 col-md-6 portfolio-item filter-app" id="allpot">
            <div class="portfolio-wrap">
              <img src="${data.img}" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>${data.title}</h4>
            
                <div class="portfolio-links">
                  <a href="${data.img}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="/${data.id}/project_detail" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
            </div>
  `).join('')}

          
    </section>

  ${foooters()}
  `
}

export default posts