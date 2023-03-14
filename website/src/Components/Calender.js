import React from "react";

import "./Calender.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import DayNumber from "../Components/DayNumber";
import DayText from "../Components/DayText";
import EachHour from "../Components/EachHour";
import { useParams } from "react-router-dom";

//This componenet will have the main Calender componenet in it.
function Calender() {
  return (
    <React.Fragment>
      <Container className="calender">
        <div
          style={{
            display: "inline-block",
            minWidth: "100%",
            overflowX: "auto",
            overflowY: "scroll",
            overflow: "scroll",
          }}
        >
          <Row>
            <Col>Display</Col>
            <Col>Category</Col>
            <Col>Regions</Col>
          </Row>
          <Row style={{ borderTop: "2px solid black" }}>
            <DayText />
          </Row>
          <Row style={{ borderBottom: "2px solid black", marginBottom: "20px" }}>
            <DayNumber />
          </Row>
          <EachHour />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Calender;
