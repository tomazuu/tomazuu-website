import React from "react";
import ReactTooltip from "react-tooltip";

class Section5 extends React.Component {
    render() {
        return (
            <>
                <ReactTooltip/>
                <section id="contact">

                    <div class="overlay"></div>

                    <div class="row narrow section-intro">
                        <div class="col-twelve">
                            <h3 class="animate-this">Contact</h3>
                            <h1 class="animate-this">I'm Available for Freelance Work. Feel Free to Contact Me.</h1>

                            <p class="lead animate-this">thetsukiyotomasu@gmail.com</p>
                            <p>(+63)9915335229</p>
                        </div>
                    </div>


                </section>

                <footer>
                    <div class="row">

                        <div class="col-twelve tab-full social">
                            <ul class="footer-social">
                                <li><a href="https://www.instagram.com/tomazuu/">Instagram</a></li>
                                <li><a href="https://www.linkedin.com/in/thetsukiyotomasu">LinkedIn</a></li>
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