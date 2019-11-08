import React from "react";
import { Grid, Cell } from "react-mdl";
import Typical from "react-typical";

import "./homepage.css";

const Home = () => {
  return (
    <div className="home-body">
      <Grid className="home__grid">
        <Cell col={12}>
          <div className="home__content">
            <h1 className="home__title">Alexander Sevruk</h1>
            <h2 className="home__title2">
              Front-end developer / Graphic designer
            </h2>
            <hr className="home__hr" />
            <p className="home__text">
              <Typical
                steps={["React", 1500, "Front-end", 1500, "Layout", 1500]}
                loop={Infinity}
                wrapper="b"
              />
            </p>
          </div>

          <div className="links">
            {/*github*/}
            <a
              href="https://github.com/AlexanderSevruk"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" />
            </a>
            {/*telegram*/}
            <a
              href="https://t.me/AlexanderSevruk"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-telegram  " />
            </a>
            {/*mail*/}
            <a
              href="mailto: alexandersevruk96@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-envelope" />
            </a>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Home;
