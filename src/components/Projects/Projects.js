import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Profot.png";
import emotion from "../../Assets/Projects/wp7250087.webp";
import editor from "../../Assets/Projects/DEMtop.png";
import chatify from "../../Assets/Projects/Travel.png";
import suicide from "../../Assets/Projects/Python-Symbol.png";
import bitsOfCode from "../../Assets/Maya.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Skills </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Travel&co"
              description="Travel.co is more than just a website; it’s a gateway to discovering new places and experiences. By combining the power of HTML and CSS, you have created a platform that not only looks great but also provides valuable information and inspiration to travelers. Whether users are looking for travel tips, destination guides, or simply some wanderlust inspiration, Travel.co has it all."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Thub clone"
              description="Maya is more than just an online course website; it’s a comprehensive learning platform designed to meet the needs of modern learners. By utilizing Bootstrap, you have created a site that is not only visually appealing but also highly functional and responsive. Whether users are looking to expand their knowledge or teach new skills, Maya provides the perfect environment for online education."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Fabric store"
              description="DEMtop is more than just a fabric store; it’s a comprehensive platform designed to meet the needs of modern shoppers. By leveraging the power of JavaScript, you have created a website that is not only visually appealing but also highly functional and user-friendly. Whether users are looking for specific fabrics or simply browsing for inspiration, DEMtop provides a seamless and enjoyable shopping experience."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portofolio"
              description="KK is more than just a personal portfolio; it’s a comprehensive platform designed to showcase your skills, projects, and professional journey. By utilizing React and Node.js, you have created a website that is not only visually appealing but also highly functional and user-friendly. Whether users are looking to learn more about your work or get in touch with you, KK provides the perfect environment for professional networking and growth."
              ghLink=""
              demoLink=""
            />
          </Col>

    

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
