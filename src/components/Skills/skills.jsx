import React from "react";
import { Grid, Cell } from "react-mdl";
import "./skills.css";

const Skills = () => {
  return (
    <div>
      <Grid className="skills--grid">
        <Cell className="skill__cell" col={4}>
          {" "}
          <ul className="skill__col">
            <li className="skill__list">
              <h6 className="skill__title">HTML</h6>{" "}
              <p className="skill__description">
                Освоил язык гипертекстовой разметки текста. Научился делать
                разметку веб-страницы, применять теги и атрибуты на сайте.
              </p>
            </li>
            <li className="skill__list">
              <h6 className="skill__title"> CSS </h6>{" "}
              <p className="skill__description">
                Изучил таблицу каскадных стилей CSS. Научился стилизовать
                элементы на сайте с помощью селекторов, атрибутов и классов
                тегов.
              </p>
            </li>
            <li className="skill__list">
              <h6 className="skill__title">JAVASCRIPT </h6>{" "}
              <p className="skill__description">
                Ориентируюсь в ванильном JavaScript. Понимание и работа с такими
                вещами как: Циклы, if else и switch statement, тернарные
                операторы, promise и асинхронные функции, массивами, Babel.js,
                теоретическое понимание принципов ООП и паттернов.
              </p>
            </li>
            <li className="skill__list">
              <h6 className="skill__title"> GIT</h6>{" "}
              <p className="skill__description">
                Работа с удаленными репозиторями. Пуш, пул реквесты, коммиты,
                создание веток и т.д.
              </p>
            </li>
          </ul>
        </Cell>
        <Cell className="skill__cell" col={4}>
          {" "}
          <ul className="skill__col">
            <li className="skill__list">
              <h6 className="skill__title">
                ГРАФИЧЕСКИЕ И ВЕКТОРНЫЕ РЕДАКТОРЫ
              </h6>{" "}
              <p className="skill__description">
                Работа с Adobe Photoshop, Adobe Illustrator. Хорошо ориентируюсь
                в программах. Создание логотипов, баннеров, оформления для
                медиа-ресурсов. Нарезка макета, экспорт векторной графики.
              </p>
            </li>
            <li className="skill__list">
              <h6 className="skill__title">React</h6>{" "}
              <p className="skill__description">
                Работа с библиотекой React Js. Создание классовых ,
                функциональных компонентов. Понимание life cycle методов и state
                менеджмента . Работа с NPM. Использование Context API, React
                router и подключение библиотек для UI: Reactmdl, Material UI и
                т.д.
              </p>
            </li>
            <li className="skill__list">
              <h6 className="skill__title"> МЕТОДОЛОГИЯ БЕМ </h6>{" "}
              <p className="skill__description">
                Стараюсь применять в верстке методологию - БЕМ(именование
                классов) для более читаемого кода.
              </p>
            </li>
          </ul>
        </Cell>
      </Grid>
    </div>
  );
};

export default Skills;
