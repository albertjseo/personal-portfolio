import { Col, Row } from "react-bootstrap";
import headerImg from "../assets/img/headerimg.png";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function About() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Data Analyst", "Scientist"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => clearInterval(ticker);
    }, [text]);
    /* eslint-enable react-hooks/exhaustive-deps */


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="about" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Personal Website</span>

            <div className="typewriter">
              <h1>Hi, I'm Albert Seo!</h1>
            </div>

            <p>
              I'm a data analyst with a strong passion and focus on computational biology.
              With 5+ years of experience working in a data-driven setting at Seattle Children's Research Institute and the University of Washington, I've developed
              a deep understanding of data-driven environments and the biomedical field. Combining my programming skills and critical thinking, I
              aim to leverage my expertise to contribute to advancements in data science and the biomedical field.
            </p>

            <h2>EDUCATION</h2>
            <ul>
              <li>
                <h5>M.Eng Bioengineering: Computational Biology [2022 - 2026]</h5>
              </li>
              <li>
                <h5>B.S. Physics: Biophysics [2014 - 2020]</h5>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Albert Seo header illustration" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
