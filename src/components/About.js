import {Col, Row} from "react-bootstrap";
import headerImg from "../assets/img/headerimg.png"
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function About() {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Data Analyst", "Scientist"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


    return (
        <section className="about" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <span className="tagline">Welcome to my Personal Website</span>
                        <h1>{`Hi! I'm Albert Seo`}</h1>
                        <p>
                            I'm a data analyst/scientist who is interested in exploring computer science and data analytics.
                            I have 5+ years of experience working in a data-driven setting; these experiences have helped me develop a
                            passionate, mature, and responsible approach for data in a technology advancing setting.
                        </p>
                    </Col>
                    <Col>
                        <img src={headerImg} alt="About Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}