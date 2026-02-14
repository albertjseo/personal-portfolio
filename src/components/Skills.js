import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

import python from "../assets/img/python.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import datascience from "../assets/img/datascience.png";
import wetlab from "../assets/img/wetlab.png";
import culture from "../assets/img/bacteria.png";
import molecular from "../assets/img/molecular.png";
import rt_pcr_machine from "../assets/img/rt_pcr_machine.png";
import well from "../assets/img/well.png";
import chimera from "../assets/img/chimera.png";
import paup from "../assets/img/paup.png";

import { Row, Col, Container } from "react-bootstrap";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>SKILLS</h2>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={js} alt="JavaScript" />
                  <h2>JavaScript</h2>
                </div>

                <div className="item">
                  <img src={python} alt="Python" />
                  <h2>Python</h2>
                </div>

                <div className="item">
                  <img src={paup} alt="PAUP" />
                  <h2>PAUP</h2>
                </div>

                <div className="item">
                  <img src={chimera} alt="Chimera" />
                  <h2>Chimera</h2>
                </div>

                <div className="item">
                  <img src={datascience} alt="Data Science" />
                  <h2>Data Science</h2>
                </div>

                <div className="item">
                  <img src={culture} alt="Cell Culture" />
                  <h2>Cell Culture</h2>
                </div>

                <div className="item">
                  <img src={molecular} alt="Molecular Biology" />
                  <h2>Molecular Biology</h2>
                </div>

                <div className="item">
                  <img src={rt_pcr_machine} alt="PCR Machine" />
                  <h2>PCR</h2>
                </div>

                <div className="item">
                  <img src={well} alt="ELISA Plate" />
                  <h2>ELISA</h2>
                </div>

                <div className="item">
                  <img src={wetlab} alt="Wet Lab" />
                  <h2>Wet Lab</h2>
                </div>

                <div className="item">
                  <img src={html} alt="HTML" />
                  <h2>HTML</h2>
                </div>

                <div className="item">
                  <img src={css} alt="CSS" />
                  <h2>CSS</h2>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
