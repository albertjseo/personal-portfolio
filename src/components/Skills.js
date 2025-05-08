import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from "react";
import python from "../assets/img/python.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import datascience from "../assets/img/datascience.png";
import wetlab from "../assets/img/wetlab.png";
import culture from "../assets/img/bacteria.png"
import molecular from "../assets/img/molecular.png"
import rt_pcr_machine from "../assets/img/rt_pcr_machine.png"
import well from "../assets/img/well.png"
import { Row } from "react-bootstrap";

export default function NavBar() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <container>
            <Row>
                <div className="col">
                    <div className="skill-bx">
                        <h2>
                            SKILLS
                        </h2>
                        <p> <br></br>
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                <img src={js} alt="Image"/>
                                <h2>JavaScript</h2>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image"/>
                                <h2>Python</h2>
                            </div>
                            <div className="item">
                                <img src={datascience} alt="Image"/>
                                <h2>Data Science</h2>
                            </div>
                            <div className="item">
                                <img src={culture} alt="Image"/>
                                <h2>Cell Culture</h2>
                            </div>
                            <div className="item">
                                <img src={molecular} alt="Image"/>
                                <h2>Molecular Biology</h2>
                            </div>
                            <div className="item">
                                <img src={rt_pcr_machine} alt="Image"/>
                                <h2>PCR</h2>
                            </div>
                            <div className="item">
                                <img src={well} alt="Image"/>
                                <h2>ELISA</h2>
                            </div>
                            <div className="item">
                                <img src={wetlab} alt="Image"/>
                                <h2>Wet Lab</h2>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image"/>
                                <h2>HTML</h2>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image"/>
                                <h2>CSS</h2>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </Row>
        </container>
    </section>
  )
}