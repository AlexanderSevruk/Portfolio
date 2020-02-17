import React, { Component } from "react";

import Card from "./cardUi";

import img1 from "../../img/Recipebook.jpg";
import img2 from "../../img/fesco_layout.jpg";
import img3 from "../../img/moviefinder.jpg";
import img4 from "../../img/Slime_crates_behance.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <Card
              imgsrc={img1}
              title="Recipe book"
              buttontext1="Github"
              buttontext2="Live demo"
              link1="https://github.com/AlexanderSevruk/recipebook/tree/master"
              link2="https://alexandersevruk.github.io/recipebook/#/"
              description="Приложение для поиска, создания и хранения рецептов."
            />
          </div>
          <div className="col">
            <Card
              imgsrc={img2}
              title="Fesco"
              buttontext1="Github"
              buttontext2="Live demo"
              link1="https://github.com/AlexanderSevruk/alexandersevruk.github.io"
              link2="https://alexandersevruk.github.io/"
              description="Верстка сайта с использованием сетки bootstrap. Сайт адаптивный."
            />
          </div>
          <div className="col">
            <Card
              imgsrc={img3}
              title="Movie finder"
              buttontext1="Github"
              buttontext2="Live demo"
              link1="https://github.com/AlexanderSevruk/moviefinder"
              link2="https://alexandersevruk.github.io/moviefinder/"
              description="Приложение для поиска фильмов"
            />
          </div>
          <div className="col">
            <Card
              imgsrc={img4}
              title="Logos/overlays"
              buttontext1="Profile"
              buttontext2="Behance"
              link1="https://99designs.com/profiles/3119049?category=&order=featured#filter-controls"
              link2="https://www.behance.net/gallery/85789201/twitch-templates"
              description="логотипы и оформление для медиаресурсов."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
