import {Row, Col, TabContainer, TabContent, TabPane} from "react-bootstrap";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import projImg0 from "../assets/img/projImg0.png"
import projImg1 from "../assets/img/projImg1.png"
import projImg2 from "../assets/img/projImg2.png"
import projImg3 from "../assets/img/projImg3.png"
import projImg4 from "../assets/img/projImg4.png"
import projImg5 from "../assets/img/projImg5.png"
import projImg6 from "../assets/img/projImg6.png"
import projImg7 from "../assets/img/projImg7.png"
import projImg8 from "../assets/img/projImg8.png"
import projImg9 from "../assets/img/projImg9.png"
import projImg10 from "../assets/img/projImg10.png"
import Container from "react-bootstrap/Container";


export default function Projects() {

    const projectInfo = [
        {
            title: <a href="https://github.com/albertjseo/breast-cancer-histopathology-classifier" target="_blank" className="project--title">Breast Cancer Histopathology Classifier</a>,
          description: "Python, SVM, SciPy",
          imgUrl: projImg10,
        },
        {
            title: <a href="https://github.com/albertjseo/ovarian-cancer-metrics" target="_blank" className="project--title">Ovarian Cancer Analysis</a>,
          description: "Python, ScanPy, Seaborn, Matplotlib",
          imgUrl: projImg9,
        },
        {
            title: <a href="https://github.com/albertjseo/covid19-mutations" target="_blank" className="project--title">Covid-19 Mutation Characterization</a>,
          description: "Python, BioPython",
          imgUrl: projImg8,
        },
        {
            title: <a href="https://github.com/albertjseo/PBMC-metrics" target="_blank" className="project--title">Scanpy Practice</a>,
          description: "Python",
          imgUrl: projImg7,
        },
        {
            title: <a href="https://github.com/albertjseo/viral-integration-simulation" target="_blank" className="project--title">Viral Integration Simulation - On Going</a>,
          description: "Python, Snakemake",
          imgUrl: projImg0,
        },
        {
            title: <a href="https://github.com/albertjseo/cell-image-processing" target="_blank" className="project--title">Cell Morphology Tracker </a>,
          description: "MATLAB",
          imgUrl: projImg1,
        },
        {
            title: <a href="https://github.com/albertjseo/covid19-analysis-with-sql" target="_blank" className="project--title">Covid-19 with SQL </a>,
          description: "Python, HTML, CSS, SQL, Flask",
          imgUrl: projImg2,
        },
        {
            title: <a href="https://github.com/albertjseo/drug-discovery" target="_blank" className="project--title">Drug Discovery </a>,
          description: "Python",
          imgUrl: projImg3,
        },
        {
            title: <a href="https://github.com/albertjseo/agm_db" target="_blank" className="project--title">Custom IgBLAST Database</a>,
          description: "Python",
          imgUrl: projImg4,
        },
        {
            title: <a href="https://github.com/albertjseo/valorant-tracker" target="_blank" className="project--title">Valorant Tracker</a>,
          description: "Python, HTML, CSS, Flask, API",
          imgUrl: projImg5,
        },
        {
            title: <a href="https://github.com/albertjseo/survey_sample" target="_blank" className="project--title">Simple Survey</a>,
          description: "JavaScript, React, CSS, HTML",
          imgUrl: projImg6,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>PROJECTS</h2>
                        <p> </p>
                        <TabContainer id="project-tabs" defaultActivekey="first">
                              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">For More Information</Nav.Link>
                                </Nav.Item>
                              </Nav>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <Row>
                                        {
                                            projectInfo.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="second">TEXT</TabPane>
                                <TabPane eventKey="third">TEXT</TabPane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}