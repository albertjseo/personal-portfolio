import {Row, Col, TabContainer, TabContent, TabPane} from "react-bootstrap";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { PublicationCard } from "./PublicationCard";
import Container from "react-bootstrap/Container";
import ab from "../assets/img/antibody.png";
import crispr from "../assets/img/gene_editing.png";
import cell from "../assets/img/cell.png";
import lab from "../assets/img/laboratory.png";
import bio from "../assets/img/biological.png";

export default function Publications () {

    const projectInfo = [
        {
            title: <a href="https://pubmed.ncbi.nlm.nih.gov/38490197/" target="_blank" className="project--title">Persistent immune imprinting occurs after vaccination with the COVID-19 XBB.1.5 mRNA booster in humans</a>,
          description: "",
          imgUrl: lab,
        },
        {
            title: <a href="https://pubmed.ncbi.nlm.nih.gov/37100120/" target="_blank" className="project--title">Siglec-9 is an inhibitory receptor on human mast cells in vitro</a>,
          description: "",
          imgUrl: bio,
        },
        {
            title: <a href="https://pubmed.ncbi.nlm.nih.gov/36006736/" target="_blank" className="project--title">Mast cell-derived factor XIIIA contributes to sexual dimorphic defense against group B streptococcal infections </a>,
          description: "",
          imgUrl: cell,
        },
        {
            title: <a href="https://pubmed.ncbi.nlm.nih.gov/39058596/" target="_blank" className="project--title">Mapping immunodominant sites on the MERS-CoV spike glycoprotein targeted by infection-elicited antibodies in humans</a>,
          description: "",
          imgUrl: ab,
        },
        {
            title: <a href="https://pubmed.ncbi.nlm.nih.gov/34324892/" target="_blank" className="project--title">Mast cell surfaceome characterization reveals CD98 heavy chain is critical for optimal cell function</a>,
          description: "",
          imgUrl: crispr,
        },
    ];

    return (
        <section className="publication" id="publications">
            <Container>
                <Row>
                    <Col>
                        <h2>PUBLICATIONS</h2>
                        <p> </p>
                        <TabContainer id="publication-tabs" defaultActivekey="first">
                              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                  <Nav.Link eventKey="first">For More Information</Nav.Link>
                                </Nav.Item>
                              </Nav>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <Row>
                                        {
                                            projectInfo.map((publication, index) => {
                                                return (
                                                    <PublicationCard
                                                        key={index}
                                                        {...publication}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}