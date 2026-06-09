import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
  LET ME <span className="purple"> INTRODUCE </span> MYSELF
</h1>

<p className="home-about-body">
  I am a passionate Computer Science student and aspiring Software Engineer who enjoys building innovative and user-friendly web applications.
  <br />
  <br />
  I am proficient in
  <i>
    <b className="purple"> C, JavaScript, Python, HTML, CSS, and Bootstrap. </b>
  </i>
  <br />
  <br />
  My primary interests include developing
  <i>
    <b className="purple"> Modern Web Applications, Responsive User Interfaces, </b>
  </i>
  and creating engaging digital experiences through technology.
  <br />
  <br />
  I enjoy working with
  <b className="purple"> Frontend and Full-Stack Development </b>
  while continuously learning new technologies and improving my software development skills.
  <br />
  <br />
  I have built several projects using
  <b className="purple"> HTML, CSS, JavaScript, Bootstrap, and Python, </b>
  including responsive websites and interactive web applications.
  <br />
  <br />
  Currently, I am expanding my knowledge in
  <i>
    <b className="purple"> React.js, Node.js, and Modern Web Technologies </b>
  </i>
  with the goal of becoming a skilled Full-Stack Developer and building impactful software solutions.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KARTHIK93465"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/kesaboina-karthik-2312a3315"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
