import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./project.css";

const Design = () => {
  return (
    <Container>
      <Row className="justify-content-md-start">
        <Col md="auto">
          <Card
            style={{
              marginTop: "20px",
              border: "none",
              maxWidth: "14rem"
            }}
          >
            <Card.Img
              style={{ height: "10rem" }}
              variant="top"
              src="http://i.piccy.info/i9/dbf475dc4643228b2993429cec588db5/1572791522/61085/1345661/Slime_crates_behance.jpg"
            />
            <Card.Body style={{ fontSize: "0.9rem", height: "14rem" }}>
              <Card.Title>Logo</Card.Title>
              <Card.Text>
                Сделал несколько логотипов на 99designs. Большинство из них вы
                можете найти в профиле ниже
              </Card.Text>
              <Button
                size="sm"
                href="https://99designs.com/profiles/3119049?category=&order=featured#filter-controls"
                target="_blank"
                variant="dark"
              >
                Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md="auto">
          <Card
            style={{
              marginTop: "20px",
              border: "none",
              maxWidth: "14rem"
            }}
          >
            <Card.Img
              style={{ height: "10rem" }}
              variant="top"
              src="http://i.piccy.info/i9/411df9f2a4ea71aa79ee569b7fb30a3c/1572792248/109476/1345661/offline.jpg"
            />
            <Card.Body style={{ fontSize: "0.9rem", height: "14rem" }}>
              <Card.Title>templates/overlays</Card.Title>
              <Card.Text>Оформление для медиаресурсов.</Card.Text>
              <Button
                href="https://www.behance.net/gallery/85789201/twitch-templates"
                target="_blank"
                variant="dark"
                size="sm"
              >
                Behance
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Design;
