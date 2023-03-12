import React from "react";

import Calender from "../Components/Calender";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DayNumber from "../Components/DayNumber";
import DayText from "../Components/DayText";
import EachHour from "../Components/EachHour";

function Homepage() {
  return (
    <React.Fragment>
      <Container>
        <div style={{ display: "inline-block", minWidth: "100%", overflowX: "auto" }}>
          <Row>
            <Col>Display</Col>
            <Col>Category</Col>
            <Col>Regions</Col>
          </Row>
          <Row>
            <DayText />
          </Row>
          <Row>
            <DayNumber />
          </Row>
          <EachHour />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Homepage;
