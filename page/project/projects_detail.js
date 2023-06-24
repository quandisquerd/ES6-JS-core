import { useEffect, useState } from "../../lib"
import foooters from "../../nav/foooters"
import headers from "../../nav/headers"


const projects_detail = ({ id }) => {
    const [data, setdata] = useState([])
    const [data1, setdata1] = useState([])
    const [data2, setdata2] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/project/' + id)
            .then((response) => response.json())
            .then(data => setdata(data))

    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/project/' + id)
            .then((response) => response.json())
            .then(data => setdata1(data.technology))

    }, [])
  
    return /*html*/`
  ${headers()}
  <div class="container toping">



	        <div class="heading-section">
	            <h2>Project Details</h2>
	        </div>
	        <div class="row">
            <div class="col-md-6">
             <div class="item">
                <img src="${data.img}" />
            </div>
             
          <div id="thumb" class="owl-carousel product-thumb">
            
          </div>
            </div>
             
       
	        	<div class="col-md-6">
	        		<div class="product-dtl">
        				<div class="product-info">
		        			<div class="product-name">${data.name}</div>
		        			<div class="reviews-counter">
								
								<span>${data.time}</span>
							</div>
		        		
		        		</div>
	        			<p>${data.mota}</p>
	        			<div class="row">
	        				<div class="col-md-6">
	        					<label for="size">Technology</label>
								${data1.map(data => `
                                    <li>${data.icon} ${data.name}</li>
                                `).join('')}
	        				</div>
	        				<div class="col-md-6">
	        					
	        				</div>
	        			</div>
	        			<div class="product-count">
	        				
							<a href="#" class="round-black-btn">Priview</a>
	        			</div>
	        		</div>
	        	</div>
	        </div>
	        <div class="product-info-tabs">
		        <ul class="nav nav-tabs" id="myTab" role="tablist">
				  	<li class="nav-item">
				    	<a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
						
				  	</li>
					
				  	<li class="nav-item">
				    	<a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
				  	</li>
				</ul>
				<div class="tab-content" id="myTabContent">
				  	<div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
				  	${data.desc}
				  	</div>
				  	<div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
				  		<div class="review-heading">REVIEWS</div>
				  		<p class="mb-20">There are no reviews yet.</p>
				  		<form class="review-form">
		        			<div class="form-group">
			        			<label>Your rating</label>
			        			<div class="reviews-counter">
									<div class="rate">
									    <input type="radio" id="star5" name="rate" value="5" />
									    <label for="star5" title="text">5 stars</label>
									    <input type="radio" id="star4" name="rate" value="4" />
									    <label for="star4" title="text">4 stars</label>
									    <input type="radio" id="star3" name="rate" value="3" />
									    <label for="star3" title="text">3 stars</label>
									    <input type="radio" id="star2" name="rate" value="2" />
									    <label for="star2" title="text">2 stars</label>
									    <input type="radio" id="star1" name="rate" value="1" />
									    <label for="star1" title="text">1 star</label>
									</div>
								</div>
							</div>
		        			<div class="form-group">
			        			<label>Your message</label>
			        			<textarea class="form-control" rows="10"></textarea>
			        		</div>
			        		<div class="row">
				        		<div class="col-md-6">
				        			<div class="form-group">
					        			<input type="text" name="" class="form-control" placeholder="Name*">
					        		</div>
					        	</div>
				        		<div class="col-md-6">
				        			<div class="form-group">
					        			<input type="text" name="" class="form-control" placeholder="Email Id*">
					        		</div>
					        	</div>
					        </div>
					        <button class="round-black-btn">Submit Review</button>
			        	</form>
				  	</div>
				</div>
			</div>
			
			
		</div>
    
	</div>
    ${foooters()}
  `
}
export default projects_detail