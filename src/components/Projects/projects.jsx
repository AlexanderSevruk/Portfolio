import React, { Component } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import Programming from "./programming";
import Design from "./design";

class Projects extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          height: "auto",
          width: "auto",
          backgroundColor: "#202020"
        }}
      >
        <Container style={{ paddingTop: "10vh" }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Programming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Design</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Programming />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Design />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

export default Projects;
