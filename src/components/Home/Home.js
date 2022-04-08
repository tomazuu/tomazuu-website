import React from "react";
import ReactTooltip from "react-tooltip";
import FloatCircle from "../Effects/FloatCircle";

class Home extends React.Component{
    render(){
        return(
            <>
                <ReactTooltip/>
                <section id="home">
                    <div class="overlay"></div>
                    <div class="gradient-overlay"></div>
                    <div class="home-content-table">
                        <FloatCircle/>
                        <div class="home-content-tablecell">
                            <div class="row">
                                <div class="col-twelve">		   			
                                        <div class="home-bottom-text">

                            <h3 class="animate-intro">hello there!</h3>
                                <span class="animate-intro">i am <a class="tomazuu">tomazuu </a></span>
                            <h1 class="animate-intro">
                            developer | graphic artist <br/>
                            based in Tacloban Philippines. 
                            </h1>	

                            <ul class="home-section-links">
                                <li class="animate-intro">More <a href="#about" class="smoothscroll">About Me</a></li>
                                {/*
                                <li class="animate-intro">View <a href="#portfolio" class="smoothscroll" data-tip="this functionality will be added soon">My Works</a></li>
                                */
                                }
                                <li class="animate-intro">Contact <a href="#contact" class="smoothscroll">By Email</a></li>								
                            </ul>

                        </div> 
                                </div> 
                            </div>
                        </div> 		   
                     </div> 

                 </section>
            </>
        );
    }
}

export default  Home; 