import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Calender.css";

function EachHour() {
  const [shows, setShows] = useState([
    { name: "BBC", startTime: 1, endTime: 10 },
    { name: "CNN", startTime: 0, endTime: 3 },
  ]);

  const hours = [];
  const rows = [];

  // Generate the hour columns
  for (let i = 0; i < 24; i++) {
    hours.push(
      <Col key={`hour-${i}`} className="col-hour">
        {i}:00
      </Col>
    );
  }

  // Generate the program rows
  shows.forEach((show, index) => {
    const programCells = [];

    // Generate the program cells for each hour
    for (let i = 0; i < 24; i++) {
      const isHighlighted = i >= show.startTime && i < show.endTime;

      programCells.push(
        <Col
          key={`program-${i}`}
          className={`col-program ${isHighlighted ? "highlighted" : ""} row-show`}
        >
          {isHighlighted && i === show.startTime ? show.name : ""}
        </Col>
      );
    }

    // Generate the row for this program
    rows.push(
      <Row key={`row-${index}`} className="row-program">
        <Col className="col-channel">{show.name}</Col>
        <React.Fragment>{programCells}</React.Fragment>
      </Row>
    );
  });

  return (
    <React.Fragment>
      <Row className="row-header ">
        <Col>Time</Col>
        {hours}
      </Row>

      <div className="container-programs">{rows}</div>
    </React.Fragment>
  );
}

export default EachHour;
