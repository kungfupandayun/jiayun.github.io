import React from "react";
import Particle from "./Particle";
import Typewriter from "typewriter-effect";
import Container from "react-bootstrap/esm/Container";

function Home() {
  return (
    <section className="home-section">
        <Particle />
        <Container className="home-text">
          <Typewriter
            options={{
              strings: [
                "Hi There.",
                "Welcome to my page."
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 200,
            }}
          />
        </Container>
    </section>
  );
}

export default Home;
