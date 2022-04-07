import React from "react";
import ReactTooltip from 'react-tooltip';

class Section1 extends React.Component {
    render() {
        return (
            <>
                <ReactTooltip />
                <section id="about">
                    <div class="about-profile-bg"></div>
                    <div class="about-wrap">
                        <div class="about-profile">
                            <div class="about-profile-bg"></div>

                            <div class="intro">
                                <h3 class="animate-this">About</h3>
                                <h1 class="animate-this">tomazuu</h1>

                                <p class="lead animate-this">
                                    Thomas Kristian [Longjas] Montilla is my full name.
                                    Tomi is my nickname. Tomazuu is my pen-name.
                                    I was born and raised in Tacloban City, Philippines.
                                    I graduated Bachelor of Science in Computer Science in the University of the Philippines.
                                    Photography, Calligraphy, Cooking and Travelling are my homie-side-hobbies.
                                </p>
                            </div>

                            <p class="animate-this">
                                I am a full stack software engineer and QA engineer who is more into Java and React. Currently diving in the world of UI/UX.
                                I am also freelance photographer and graphic artist.
                            </p>
                            {/*
                            <p>
                                <a href="#"
                                    class="button full-width disabledCursor"
                                    onClick={(event) => event.preventDefault()}
                                    data-tip="this functionality will be added soon">
                                    Contact Me</a>
                                <a href="#"
                                    class="button button-primary full-width disabledCursor"
                                    onClick={(event) => event.preventDefault()}
                                    data-tip="this functionality will be added soon">
                                    Download CV</a>
                            </p>
                             */}

                        </div>

                        <div class="about-services">

                            <div class="intro">
                                <h3 class="animate-this">Services</h3>
                                <h1 class="animate-this">my arsenal</h1>

                                <p class="lead animate-this">
                                    For almost 8 years in the world of IT industry and Designing, I equipped myself with the following skills to match up the client's expectations.
                                </p>
                            </div>

                            <ul class="services">

                                <li class="item-webdesign animate-this">
                                    <div class="icon-wrap">
                                        <i class="icon-HTML"></i>
                                    </div>
                                    <div class="service-item">
                                        <h4>Web Developer</h4>
                                        <p>Website creation and maintenance (Back-end and Front-end) based on client specifications</p>
                                    </div>
                                </li>
                                <li class="item-uiux animate-this">
                                    <div class="icon-wrap">
                                        <i class="icon-Checked"></i>
                                    </div>
                                    <div class="service-item">
                                        <h4>Quality Assurance</h4>
                                        <p>Code testing (Unit Test,System Test...), test automation and generation of reports</p>
                                    </div>
                                </li>
                                <li class="item-uiux animate-this">
                                    <div class="icon-wrap">
                                        <i class="icon-Picture"></i>
                                    </div>
                                    <div class="service-item">
                                        <h4>Photography</h4>
                                        <p>Product photography for your business, portraits and events</p>
                                    </div>
                                </li>
                                <li class="item-uiux animate-this">
                                    <div class="icon-wrap">
                                        <i class="icon-Signature"></i>
                                    </div>
                                    <div class="service-item">
                                        <h4>Graphic Designing</h4>
                                        <p>Logo creation, media-layouts, social-media-related designs, infographics, posters and others</p>
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