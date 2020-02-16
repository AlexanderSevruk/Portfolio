import React, { Component } from "react";
import { Container } from "react-bootstrap";
import CoolTabs from "react-cool-tabs";

import Programming from "./programming";
import Design from "./design";

class Projects extends Component {
  render() {
    return (
      <div
        style={{
          height: "160vh",
          width: "100%",
          backgroundColor: "#202020",
          paddingTop: "120px"
        }}
      >
        <Container>
          <CoolTabs
            tabKey={"1"}
            style={{
              width: "100%",
              height: "140vh"
            }}
            activeTabStyle={{
              background: "#dadada",
              color: "#202020",
              fontWeight: "bold"
            }}
            unActiveTabStyle={{
              background: "#dadada",
              color: "#202020",
              fontWeight: "bold"
            }}
            activeLeftTabBorderBottomStyle={{
              background: "#464646",
              height: 4
            }}
            activeRightTabBorderBottomStyle={{
              background: "#464646",
              height: 4
            }}
            tabsBorderBottomStyle={{ background: "#969696", height: 4 }}
            leftContentStyle={{ background: "#202020" }}
            rightContentStyle={{ background: "#202020" }}
            leftTabTitle={"Programming"}
            rightTabTitle={"Design"}
            leftContent={<Programming />}
            rightContent={<Design />}
            contentTransitionStyle={"transform 0.6s ease-in"}
            borderTransitionStyle={"all 0.6s ease-in"}
          />
        </Container>
      </div>
    );
  }
}

export default Projects;
