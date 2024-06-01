import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"; 
import Col from "react-bootstrap/esm/Col"; 
import carpool from "./../assets/projects/carpool.jpg";
import compiler from "./../assets/projects/compiler.png";
import gdpr from "./../assets/projects/gdpr.jpg";
import minesweeper from "./../assets/projects/minesweeper.png";
import natureofcode from "./../assets/projects/natureofcode.jpg";
import os from "./../assets/projects/os.jpg";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";

function Projects() {
  return (
    <section class="project-section">
      <Particle/>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carpool}
              title="CarPooling (Sql,Java)"
              description="A simple Java API for drivers to provide carpooling service and  passengers to find the most suitable path and time. It uses oracle sql to save all the paths, employing different designs."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              title="Operating System (C)"
              description="A school project to emulate the kernel of an operating system, to handle the program execution, interrupts, the user mode and the memory management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdpr}
              title="GDPR Analysis (Web Crawler, Text Analysis)"
              description=" A python program to run a webcrawler on a GDPR website and do an analysis on the data obtained, return a GDPR report to users. Report contains data such as the accumulated fines in a year, the most recent fine, the highest fine etc..."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={natureofcode}
              title="Flocking Boids Simulation (Java)"
              description="A java program using Java GUI to run the simulation of a flocking boids."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compiler}
              title="New Language Interpretor & Compiler (Java, C)"
              description="A java program implement the design of a Interpretor. It emulates a compiler to analyse the syntaxes, semantics and grammars of a new language. It detects compilation errors."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minesweeper}
              title="MineSweeper"
              description="A program to emulate the minesweeper game on terminal."
            />
          </Col>
        </Row>
    </Container>
  </section>  
  );
}

export default Projects;
