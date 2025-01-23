import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github2.png";
import pubMed from "../assets/img/book.png";



export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => {
          if (window.scrollY > 50) {
              seScrolled(true);
          } else {
              seScrolled(false);
          }
      }
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }

  return (
    <BrowserRouter>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
                <h2 className="nav-brand-name">Albert Seo</h2>
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

              </Nav>
              <span className="navbar-text">
                  <div className="social-icon">
                      <a href="https://www.linkedin.com/in/albertjseo/" target="_blank"><img src={linkedin} alt="logo"/></a>
                      <a href="https://github.com/albertjseo" target="_blank"><img src={github} alt="logo"/></a>
                      <a href="https://pubmed.ncbi.nlm.nih.gov/?term=albert+seo" target="_blank"><img src={pubMed} alt="logo"/></a>

                  </div>
                  <HashLink to='#connect'>
                      <button className="contact"><span>Let’s Connect</span></button>
                  </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </BrowserRouter>
  );
}