import React from "react";
import Particle from "./Particle";
import {cartoonProgrammer} from './../assets';

function About() {
  return (
    <section className="about-section">
        <Particle />
        <div className="about-content">
          <div className="about-img-container">
            <img src={cartoonProgrammer}
                alt="home pic"
                className="about-img"
            />
          </div>
          <div className="about-desc-container">
            <p className="about-desc">
                Jiayun is a software engineer with three years of robust experience in the tech industry. She has honed his skills in object-oriented programming, demonstrating a deep understanding and practical competence in languages such as Java and C#. Jiayun has successfully contributed to the development and deployment of cloud solutions on major platforms like Openshift. Additionally, his expertise in cyber security ensures that the applications he develops are not only functional but also secure against potential threats. Jiayun's passion for crafting clean, efficient, and maintainable code is evident in his meticulous approach to software development. She is dedicated to delivering solutions that are both scalable and easy to maintain, ensuring sustainability and performance.
            </p>
          </div>
        </div>
    </section>
  );
}

export default About;
