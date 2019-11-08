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
        <div className="projects-grid">
          {/*Project1 RecipeBook*/}

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
            <CardText style={{ fontSize: "1.1rem" }}>
              Working on app that allows you to search,save and create recipes.{" "}
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/AlexanderSevruk/recipe-book/tree/master"
                target="_blank"
              >
                github
              </Button>
              <Button
                className="button"
                colored
                href="https://alexandersevruk.github.io/recipe-book/"
                target="_blank"
              >
                live demo
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/*Project1 Design*/}
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
            <CardText style={{ fontSize: "1.1rem" }}>
              Made some logos on 99designs.Most of them you can find in the
              profile below
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
          {/*Project2 Design*/}
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
            <CardText style={{ fontSize: "1.1rem" }}>
              Overlays for media resources. Mostly for twitch.tv
            </CardText>
            <CardActions border>
              <Button
                href="https://www.behance.net/gallery/85789201/twitch-templates"
                target="_blank"
                colored
              >
                Behance
              </Button>
              <Button
                href="https://www.twitch.tv/mekroy"
                target="_blank"
                colored
              >
                Twitch.tv
              </Button>
            </CardActions>
          </Card>
        </div>
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

        <Grid>
          <Cell col={4}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
