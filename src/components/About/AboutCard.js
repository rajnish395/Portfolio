import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Rajnish Kumar Pandey</span>{" "}
            from <span className="purple">Arrah, Bihar, India</span>.
            <br />
            <br />I am currently persuing B.Tech with{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Quantum University Roorkee, Uttarakhand</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Forex Trading 📈
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always Do things which keep's you different from others!"{" "}
          </p>
          <footer className="blockquote-footer">Rajnish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
