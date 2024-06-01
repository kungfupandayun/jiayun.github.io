import React from "react";
import Particle from "./Particle";
import {cartoonProgrammer} from './../assets';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"; 
import Col from "react-bootstrap/esm/Col"; 
function About() {
  return (
    <section className="about-section">
        <Particle />
        <Container>
          <Row>
          <h1 className="about-heading">Let me Introduce myself</h1>
            <Col className="about-img-container">
              <img src={cartoonProgrammer}
                  alt="home pic"
                  className="about-img"
              />
            </Col>
            <Col className="about-desc-container">
              <p className="about-desc">
              Born in Malaysia, I have a degree in Software Engineering and a master's degree in cybersecurity.
              I have three years of experience in the tech industry. I am trained in object-oriented programming, with practical application in languages such as Java and C#. I have contributed to the development and deployment of cloud solutions on major platforms like Openshift. Additionally, my master's degree in cyber security ensures that the applications I develop are not only functional but also secure against potential threats. I have great passion for crafting clean, efficient, and maintainable code, dedicated to delivering solutions that are both scalable and easy to maintain.
              </p>
            </Col>
          </Row>
        </Container>
        
    </section>
  );
}

export default About;
