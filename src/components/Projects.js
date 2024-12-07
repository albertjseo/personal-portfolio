import {Row, Col, TabContainer, TabContent, TabPane} from "react-bootstrap";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.png"
import projImg2 from "../assets/img/projImg2.png"
import projImg3 from "../assets/img/projImg3.png"
import projImg4 from "../assets/img/projImg4.png"
import projImg5 from "../assets/img/projImg5.png"
import projImg6 from "../assets/img/projImg6.png"
import Container from "react-bootstrap/Container";


export default function Projects() {

    const projectInfo = [
        {
          title: "Cell Morphology Tracker",
          description: "MATLAB",
          imgUrl: projImg1,
        },
        {
          title: "Covid-19 with SQL",
          description: "Python, HTML, CSS, SQL, Flask",
          imgUrl: projImg2,
        },
        {
          title: "Drug Discovery",
          description: "Python",
          imgUrl: projImg3,
        },
        {
          title: "Custom IgBLAST Database",
          description: "Python",
          imgUrl: projImg4,
        },
        {
          title: "Valorant Tracker",
          description: "Python, HTML, CSS, Flask, API",
          imgUrl: projImg5,
        },
        {
          title: "Simple Survey",
          description: "JavaScript, React, CSS, HTML",
          imgUrl: projImg6,
        }
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