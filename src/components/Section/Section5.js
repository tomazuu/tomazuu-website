import React from "react";

class Section5 extends React.Component{
    render(){
        return(
            <>
                 <section id="contact">

<div class="overlay"></div>

  <div class="row narrow section-intro">
     <div class="col-twelve">
         <h3 class="animate-this">Contact</h3>
         <h1 class="animate-this">I'm Available for Freelance Work. Feel Free to Contact Me.</h1>

         <p class="lead animate-this">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
     </div> 
 </div> 

 <div class="row contact-form">
     <div class="col-twelve">

      
      <form name="contactForm" id="contactForm" method="post">
            

            <div class="form-field animate-this">
                      <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required=""/>
            </div>
            <div class="form-field animate-this">
                   <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required=""/>
             </div>
            <div class="form-field animate-this">
                      <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value=""/>
             </div>                       
            <div class="form-field animate-this">
                   <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
             </div> 

            <div class="form-field animate-this">
               <button class="submitform">Submit</button>

               <div id="submit-loader">
                  <div class="text-loader">Sending...</div>                             
                       <div class="s-loader">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                          </div>
                      </div>
            </div>

            
        </form> 

     
      <div id="message-warning"></div> 

      
        <div id="message-success">
         <i class="fa fa-check"></i>Your message was sent, thank you!<br/>
        </div>

   </div> 		
 </div>

 <div class="row contact-info">


 </div> 
  
</section>

<footer>
     	<div class="row">

     		<div class="col-twelve tab-full social">
     			<ul class="footer-social">        
			      <li><a href="#">Instagram</a></li>
			   </ul> 	      		
	      </div>

      	<div class="col-twelve tab-full">
	      	<div class="copyright">
		        	<span>© Copyright Tomazuu 2022.</span> 		        	         	
		      </div>		                  
	      </div>      	

      </div> 

      <div id="go-top">
		   <a class="smoothscroll" title="Back to Top" href="#top"><i class="icon-UpArrow"></i></a>
		</div>		
   </footer>



            </>
        )
    }
}
export default Section5;