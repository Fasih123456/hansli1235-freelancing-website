import React from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import "./Calender.css";

//This function will contain the day number, 1,2,3,4,5
function DayNumber() {
  const currentDate = new Date();
  const start = currentDate.getDate() - 5;
  const end = currentDate.getDate() + 5;

  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return (
    <React.Fragment>
      {numbers.map((day) => (
        <Col key={day}>
          <Link to={`/${day}`}>{day}</Link>
        </Col>
      ))}
    </React.Fragment>
  );
}

export default DayNumber;
