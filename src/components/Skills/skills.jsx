import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./skills.css";

const Skills = () => {
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
        <Row style={{ color: "#dadada" }} className="stack">
          <Col md="6">
            <ul>
              <li>
                <h1>HTML</h1>
                <p>
                  Освоил язык гипертекстовой разметки текста. Научился делать
                  разметку веб-страницы, применять теги и атрибуты на сайте.
                </p>
              </li>
              <li>
                <h1> CSS </h1>
                <p>
                  Изучил таблицу каскадных стилей CSS. Научился стилизовать
                  элементы на сайте с помощью селекторов, атрибутов и классов.
                </p>
              </li>
              <li>
                <h1> BOOTSTRAP</h1>
                <p>
                  Понимание фреймворка css - Bootstrap. Применение готовой сетки
                  Bootstrap. Работа с гридами в целом. Добавление элементов UI в
                  проекты. Использование похожих библиотек: Reactmdl,
                  Material-UI, React-Bootstrap.
                </p>
              </li>
              <li>
                <h1>JAVASCRIPT </h1>
                <p>
                  Ориентируюсь в ванильном JavaScript. Понимание и работа с
                  такими вещами как: Циклы, if else и switch statement,
                  тернарные операторы, promise и асинхронные функции, массивами,
                  теоретическое понимание принципов ООП и паттернов.
                </p>
              </li>
            </ul>
          </Col>

          <Col md="6">
            <ul>
              <li>
                <h1>ГРАФИЧЕСКИЕ И ВЕКТОРНЫЕ РЕДАКТОРЫ</h1>
                <p>
                  Работа с Adobe Photoshop, Adobe Illustrator. Хорошо
                  ориентируюсь в программах. Создание логотипов, баннеров,
                  оформления для медиа-ресурсов. Работа с макетами.
                </p>
              </li>
              <li>
                <h1>REACT</h1>{" "}
                <p>
                  Работа с библиотекой React Js. Создание классовых ,
                  функциональных компонентов. Понимание life cycle методов и
                  state менеджмента. Работа с API. Использование Context API,
                  React router.
                </p>
              </li>
              <li>
                <h1> GIT</h1>{" "}
                <p>
                  Работа с удаленными репозиторями. Пуш, пул реквесты, коммиты,
                  создание веток и т.д.
                </p>
              </li>
              <li>
                <h1> МЕТОДОЛОГИЯ БЕМ </h1>{" "}
                <p>
                  Стараюсь применять в верстке методологию для более читаемого
                  кода.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
