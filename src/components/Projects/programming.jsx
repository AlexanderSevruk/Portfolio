import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

import "./project.css";

const programming = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        height: "auto",
        width: "auto",
        backgroundColor: "#202020"
      }}
    >
      <Container>
        <Row>
          <Col md="auto">
            <Card
              style={{
                maxWidth: "15rem",
                margin: "20px 0",
                border: "none"
              }}
            >
              <Card.Img
                style={{ height: "10rem" }}
                variant="top"
                src="http://i.piccy.info/i9/6d5a32a6cb295d18a82203df55efc1f1/1572791153/191192/1345661/Recipebook.jpg"
              />
              <Card.Body style={{ fontSize: "0.9rem", height: "auto" }}>
                <Card.Title>Recipe Book</Card.Title>
                <Card.Text>
                  Приложение которое позволяет искать, создавать и хранить
                  рецепты.
                </Card.Text>

                <Button
                  style={{ marginRight: "10px" }}
                  size="sm"
                  href="https://github.com/AlexanderSevruk/recipebook/tree/master"
                  target="_blank"
                  variant="dark"
                >
                  Github
                </Button>
                <Button
                  size="sm"
                  href="https://alexandersevruk.github.io/recipebook/"
                  target="_blank"
                  variant="dark"
                >
                  Live demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                maxWidth: "15rem",
                margin: "20px 0",
                border: "none"
              }}
            >
              <Card.Img
                style={{ height: "10rem" }}
                variant="top"
                src="http://i.piccy.info/i9/19a75071669c502b5a318029b4b97f6a/1574095336/54402/1345661/fesco_layout.jpg"
              />
              <Card.Body style={{ fontSize: "0.9rem", height: "auto" }}>
                <Card.Title>Fesco</Card.Title>
                <Card.Text>
                  Верстка сайта с использованием сетки bootstrap. Сайт
                  адаптивный.
                </Card.Text>
                <Button
                  style={{ marginRight: "10px" }}
                  size="sm"
                  href="https://github.com/AlexanderSevruk/alexandersevruk.github.io"
                  target="_blank"
                  variant="dark"
                >
                  Github
                </Button>
                <Button
                  size="sm"
                  href="https://alexandersevruk.github.io/"
                  target="_blank"
                  variant="dark"
                >
                  Live demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              style={{
                maxWidth: "15rem",
                margin: "20px 0",
                border: "none"
              }}
            >
              <Card.Img
                style={{ height: "10rem" }}
                variant="top"
                src="http://i.piccy.info/i9/9310ab70d5b60e62c6ff59ab3ac86b28/1581613602/233181/1362321/moviefinder.jpg"
              />
              <Card.Body style={{ fontSize: "0.9rem", height: "auto" }}>
                <Card.Title>Movie Finder</Card.Title>
                <Card.Text>
                  Приложение использует the movie db API. После ввода названия
                  фильма можно найти сиквелы, приквелы и другие материалы
                  связанные с фильмом.
                </Card.Text>
                <Button
                  style={{ marginRight: "10px" }}
                  href="https://github.com/AlexanderSevruk/moviefinder"
                  target="_blank"
                  size="sm"
                  variant="dark"
                >
                  Github
                </Button>
                <Button
                  href="https://alexandersevruk.github.io/moviefinder/"
                  target="_blank"
                  size="sm"
                  variant="dark"
                >
                  Live demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default programming;
