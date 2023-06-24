import { useEffect, useState } from "../../lib"
import foooters from "../../nav/foooters"
import headers from "../../nav/headers"


const contact = () => {
  const [data,setData]= useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/user')
    .then(response => response.json())
    .then(data=>setData(data))
  },[])
    return /*html*/`
  ${headers()}
  <section id="contact" class="contact">
<div class="container">

<div class="section-title">
<h2>Contact</h2>

</div>

<div class="row" data-aos="fade-in">

<div class="col-lg-5 d-flex align-items-stretch">
<div class="info">
<div class="address">
<i class="bi bi-geo-alt"></i>
<h4>Location:</h4>
<p>${data.map(data=>data.address).join('')}</p>
</div>

<div class="email">
<i class="bi bi-envelope"></i>
<h4>Email:</h4>
<p>${data.map(data => data.email).join('')}</p>
</div>
<div class="phone">
<i class="bi bi-phone"></i>
<h4>Call:</h4>
<p>${data.map(data => data.phone).join('')}</p>
</div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2753.790619687935!2d106.40624093907128!3d20.818119011783505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31358f1cc4117659%3A0x131c74835c6fef91!2sPeople&#39;s%20Committee%20of%20Tu%20Ky%20District!5e0!3m2!1sen!2s!4v1676661669671!5m2!1sen!2s" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
</div>

</div>

<div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
<form action="forms/contact.php" method="post" role="form" class="php-email-form">
<div class="row">
<div class="form-group col-md-6">
<label for="name">Your Name</label>
<input type="text" name="name" class="form-control" id="name" required>
</div>
<div class="form-group col-md-6">
<label for="name">Your Email</label>
<input type="email" class="form-control" name="email" id="email" required>
</div>
</div>
<div class="form-group">
<label for="name">Subject</label>
<input type="text" class="form-control" name="subject" id="subject" required>
</div>
<div class="form-group">
<label for="name">Message</label>
<textarea class="form-control" name="message" rows="10" required></textarea>
</div>
<div class="my-3">
<div class="loading">Loading</div>
<div class="error-message"></div>
<div class="sent-message">Your message has been sent. Thank you!</div>
</div>
<div class="text-center"><button type="submit">Send Message</button></div>
</form>
</div>
</div>

</div>
</section><!-- End Contact Section -->





${foooters()}

  `
}

export default contact