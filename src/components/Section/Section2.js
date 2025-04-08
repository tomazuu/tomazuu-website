import React from "react";

class Section2 extends React.Component {

    render() {
        return (
            <>
                <section id="skills">

                    <div class="overlay"></div>
                    <div class="gradient-overlay"></div>

                    <div class="row wide">
                        <div class="col-skills">

                            <div class="section-intro">
                                <h3 class="animate-this">Skillset</h3>
                                <h1 class="animate-this">I've Got Some Skills.</h1>

                                <p class="animate-this"></p>
                                </div>

                            <ul class="skill-bars">
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent90"><span>90%</span></div>
                                    <strong>Project Management</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent90"><span>90%</span></div>
                                    <strong>HTML5</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent90"><span>90%</span></div>
                                    <strong>CSS3</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent90"><span>90%</span></div>
                                    <strong>Java</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent90"><span>90%</span></div>
                                    <strong>JavaScript</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent65"><span>65%</span></div>
                                    <strong>PHP</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent75"><span>75%</span></div>
                                    <strong>React</strong>
                                </li>
                            </ul>

                        </div>
                    </div>

                </section>
            </>
        );
    }

}
export default Section2;