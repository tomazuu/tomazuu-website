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

                                <p class="animate-this">Lorem ipsum Elit ut consequat veniam eu nulla nulla reprehenderit reprehenderit sit velit in cupidatat ex aliquip ut cupidatat Excepteur tempor id irure sed dolore sint sunt voluptate ullamco nulla qui Duis qui culpa voluptate enim ea aute qui veniam in irure et nisi nostrud deserunt est officia minim.</p>
                            </div>

                            <ul class="skill-bars">
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent90"><span>90%</span></div>
                                    <strong>HTML5</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent85"><span>85%</span></div>
                                    <strong>CSS3</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent70"><span>70%</span></div>
                                    <strong>JQuery</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent95"><span>95%</span></div>
                                    <strong>PHP</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent75"><span>75%</span></div>
                                    <strong>Wordpress</strong>
                                </li>
                                <li class="animate-this" data-animate="fadeInRight">
                                    <div class="progress percent90"><span>90%</span></div>
                                    <strong>Angular JS</strong>
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