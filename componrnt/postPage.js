

const postPage = ({post}) => {
    console.log(post)
  return `

  ${post.map(data=>`
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
  `
}

export default postPage