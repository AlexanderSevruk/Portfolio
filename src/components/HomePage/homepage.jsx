import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Typical from "react-typical";
import Particles from "react-particles-js";

import "./homepage.css";

const Home = () => {
  return (
    <div style={{ height: "auto" }}>
      <Particles
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          backgroundColor: "#202020",
          backgroundSize: "cover"
        }}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: true,
                speed: 2.3976023976023977,
                opacity_min: 0.22377622377622378,
                sync: true
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },

              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />

      <Container>
        <Row
          className="justify-content-md-center"
          style={{ paddingTop: "35vh" }}
        >
          <Col md="auto">
            <h1 className="home__title">Alexander Sevruk</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2 className="home__text">
              Front-end developer / Graphic designer
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p className="home__typical">
              <Typical
                steps={["React", 2000, "Front-end", 2000, "Layout", 2000]}
                loop={Infinity}
                wrapper="b"
              />
            </p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto" className="links">
            {/*github*/}

            <a
              href="https://github.com/AlexanderSevruk"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>

            {/*telegram*/}

            <a
              href="https://t.me/AlexanderSevruk"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-telegram" aria-hidden="true"></i>
            </a>

            {/*mail*/}

            <a
              href="mailto: alexandersevruk96@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
