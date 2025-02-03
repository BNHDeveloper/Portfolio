import "../../roles/GlobalRoles.css";
import "./About.css";
import question from "../../static/Thinking face.gif";
import whyChooseUs from "../../static/Choose.gif";
import React from "react";

const About = () => {
    return (
        <div className="section About">
            <h1 className="title about"  id="about">
                Welcome to Easy Learn 
            </h1>
            <div className="container About">
                <div className="about-content">
                    <p className="content">
                        At Easy Learn, we believe in the transformative
                        power of education, collaboration, and creativity.
                        Established with a passion for fostering knowledge
                        challenge communities, we are dedicated to making
                        learning accessible, enjoyable, and meaningful.
                    </p>
                    <div className="image question">
                        <img src={question} alt="question face" />
                    </div>
                </div>
            </div>
            <h1 className="title about">
                Why Choose us
            </h1>
        <section className="chooseUs">
            <div className="container">
                <div className="img">
                    <img src={whyChooseUs} alt="img" />
                </div>
                <div>
                    <div className="box-content">
                        <div className="box active">
                            Education Challenge Communities
                        </div>
                        <div className="box">
                            Diverse Range of Resources
                        </div>
                        <div className="box">
                            Innovation at the Core
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default About