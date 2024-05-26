import React from "react";
import Particle from "./Particle";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="home-section">
        <Particle />
          <div className="home-text">
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
          </div>
    </section>
  );
}

export default Home;
