import React from "react";

class Section1 extends React.Component{
    render(){
        return(
            <>
                <section id="about">

<div class="about-profile-bg"></div>

<div class="about-wrap">

    <div class="about-profile">

        <div class="about-profile-bg"></div>

         <div class="intro">
             <h3 class="animate-this">About</h3>
            <h1 class="animate-this">tomazuu?</h1>

            <p class="lead animate-this">
                Thomas Kristian [Longjas] Montilla is my full name. 
                You can call me Tomi. 
                Born and raised in Tacloban, Philippines.
                I graduated Bachelor of Science in Computer Science in the University of the Philippines. 
                Photography, Calligraphy, Cooking and Travelling are my homie-side-hobbies.
            </p>					
         </div>   	

        <p class="animate-this">
            I worked for almost 8 years in the IT Industry as a full stack software engineer. I am more on back-end and testing, but, time to time, I also polish my front-end skills.
            I am more into Java and React. Currently diving in the world of UI/UX. 
        </p>

        <p>
            <a href="#" class="button full-width animate-this">Contact Me</a>
            <a href="#" class="button button-primary full-width animate-this">Download CV</a>
        </p>  			

    </div> 

    <div class="about-services">

         <div class="intro">
            <h3 class="animate-this">Services</h3>
            <h1 class="animate-this">my arsenal</h1>

            <p class="lead animate-this">Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit. Ut dolor quis deserunt voluptate.</p>
        </div>

        <ul class="services">
            
            <li class="item-webdesign animate-this">
                <div class="icon-wrap">
                    <i class="icon-HTML"></i>
                </div>
                <div class="service-item">
                    <h4>Web Design</h4>
                    <p>Lorem ipsum Sit Ut eu Ut commodo velit ea et ex officia dolor laborum do in quis ut in occaecat non Duis ut sint voluptate esse consequat aute incididunt in voluptate incididunt.
                    </p>
                </div>   					
            </li>
            <li class="item-uiux animate-this">
                <div class="icon-wrap">
                    <i class="icon-Checked"></i>
                </div>
                <div class="service-item">
                    <h4>UI/UX Design</h4>
                    <p>Lorem ipsum Sit Ut eu Ut commodo velit ea et ex officia dolor laborum do in quis ut in occaecat non Duis ut sint voluptate esse consequat aute incididunt in voluptate incididunt.
                    </p>
                </div>   					
            </li>
        </ul>   			

    </div> 		

</div>

</section> 



            </>
        );
    }
}

export default Section1;