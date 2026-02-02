import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import yessir from "../../Assets/Projects/yessir.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Latest <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yessir}
              isBlog={false}
              title="YesSir"
              description="An online smart attendance system built using React.js, Express.js, and MongoDB that enables real-time attendance tracking, secure data storage, user authentication, and efficient management for institutions."
              ghLink="https://github.com/rajnish395/techthrive.git"
              demoLink="http://localhost:3002/"
            />
          </Col>

             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yessir}
              isBlog={false}
              title="YesSir"
              description="An online smart attendance system built using React.js, Express.js, and MongoDB that enables real-time attendance tracking, secure data storage, user authentication, and efficient management for institutions."
              ghLink="https://github.com/rajnish395/techthrive.git"
              demoLink="http://localhost:3002/"
            />
          </Col>

             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yessir}
              isBlog={false}
              title="YesSir"
              description="An online smart attendance system built using React.js, Express.js, and MongoDB that enables real-time attendance tracking, secure data storage, user authentication, and efficient management for institutions."
              ghLink="https://github.com/rajnish395/techthrive.git"
              demoLink="http://localhost:3002/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yessir}
              isBlog={false}
              title="YesSir"
              description="An online smart attendance system built using React.js, Express.js, and MongoDB that enables real-time attendance tracking, secure data storage, user authentication, and efficient management for institutions."
              ghLink="https://github.com/rajnish395/techthrive.git"
              demoLink="http://localhost:3002/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yessir}
              isBlog={false}
              title="YesSir"
              description="An online smart attendance system built using React.js, Express.js, and MongoDB that enables real-time attendance tracking, secure data storage, user authentication, and efficient management for institutions."
              ghLink="https://github.com/rajnish395/techthrive.git"
              demoLink="http://localhost:3002/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yessir}
              isBlog={false}
              title="YesSir"
              description="An online smart attendance system built using React.js, Express.js, and MongoDB that enables real-time attendance tracking, secure data storage, user authentication, and efficient management for institutions."
              ghLink="https://github.com/rajnish395/techthrive.git"
              demoLink="http://localhost:3002/"
            />
          </Col>

          

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
