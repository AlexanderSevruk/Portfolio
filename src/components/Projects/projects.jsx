import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText
} from "react-mdl";
import "./projects.css";

//garbage component

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Grid>
          <Cell col={4}>
            <Card
              className="card"
              shadow={5}
              style={{ width: "320px", height: "320px" }}
            >
              <CardTitle
                expand
                style={{
                  color: "whitesmoke",
                  background:
                    "url(http://i.piccy.info/i9/6d5a32a6cb295d18a82203df55efc1f1/1572791153/191192/1345661/Recipebook.jpg) center / cover "
                }}
              ></CardTitle>
              <CardText style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Приложение которое позволяет искать, создовать и хранить
                рецепты.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/AlexanderSevruk/recipebook/tree/master"
                  target="_blank"
                >
                  github
                </Button>
                <Button
                  className="button"
                  colored
                  href="https://alexandersevruk.github.io/recipebook/"
                  target="_blank"
                >
                  live demo
                </Button>
              </CardActions>
            </Card>
            <Card
              className="card"
              shadow={5}
              style={{ width: "320px", height: "320px" }}
            >
              <CardTitle
                expand
                style={{
                  color: "whitesmoke",
                  background:
                    "url(http://i.piccy.info/i9/19a75071669c502b5a318029b4b97f6a/1574095336/54402/1345661/fesco_layout.jpg) top / cover "
                }}
              ></CardTitle>
              <CardText style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Верстка сайта с использованием сетки bootstrap4. Сайт
                адаптивный.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/AlexanderSevruk/alexandersevruk.github.io"
                  target="_blank"
                >
                  github
                </Button>
                <Button
                  className="button"
                  colored
                  href="https://alexandersevruk.github.io/"
                  target="_blank"
                >
                  live demo
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Grid>
          <Cell col={4}>
            <Card
              className="card"
              shadow={5}
              style={{ width: "320px", height: "320px" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(http://i.piccy.info/i9/dbf475dc4643228b2993429cec588db5/1572791522/61085/1345661/Slime_crates_behance.jpg) center / cover "
                }}
              ></CardTitle>
              <CardText style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Сделал несколько логотипов на 99designs. Большинство из них вы
                можете найти в профиле ниже
              </CardText>
              <CardActions border>
                <Button
                  href="https://99designs.com/profiles/3119049?category=&order=featured#filter-controls"
                  colored
                  target="_blank"
                >
                  Profile
                </Button>
              </CardActions>
            </Card>

            <Card
              className="card"
              shadow={5}
              style={{ width: "320px", height: "320px" }}
            >
              <CardTitle
                expand
                style={{
                  color: "#fff",
                  background:
                    "url(http://i.piccy.info/i9/411df9f2a4ea71aa79ee569b7fb30a3c/1572792248/109476/1345661/offline.jpg) center / cover "
                }}
              ></CardTitle>
              <CardText style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Оформление для медиаресурсов.
              </CardText>
              <CardActions border>
                <Button
                  href="https://www.behance.net/gallery/85789201/twitch-templates"
                  target="_blank"
                  colored
                >
                  Behance
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>
            <span className="tab-text">Programming</span>
          </Tab>
          <Tab>
            <span className="tab-text">Design</span>
          </Tab>
        </Tabs>

        <div className="content">{this.toggleCategories()}</div>
      </div>
    );
  }
}

export default Projects;
