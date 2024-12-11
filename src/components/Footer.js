import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h2 className="nav-brand-name">Albert Seo</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>&copy; 2024 Albert J. Seo</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}