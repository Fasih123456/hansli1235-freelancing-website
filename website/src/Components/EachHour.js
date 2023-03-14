import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { useLocation } from "react-router-dom";

import axios from "axios";

import "./Calender.css";

function EachHour({ propDay }) {
  const [shows, setShows] = useState([
    { name: "BBC", startTime: 1, endTime: 10 },
    { name: "CNN", startTime: 0, endTime: 3 },
  ]);

  const path = useLocation().pathname;
  const number = path.split("/").pop();

  console.log(number);

  const day = number;

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth() + 1;
  let currentDay = new Date().getDate();

  currentMonth = currentMonth.toString().padStart(2, "0");
  currentDay = currentDay.toString().padStart(2, "0");

  const hours = [];
  const rows = [];
  const region = "US";

  const fetchShows = async () => {
    try {
      let response;
      if (day == undefined) {
        response = await axios.get(
          `https://api.tvmaze.com/schedule?country=${region}&date=${currentYear}-${currentMonth}-${currentDay}`
        );
      } else {
        response = await axios.get(
          `https://api.tvmaze.com/schedule?country=${region}&date=${currentYear}-${currentMonth}-${day}`
        );
      }

      const data = response.data;

      /* We can use this as filter if needed
      // Filter the episodes to only include those airing between 7am and 11am
      const filteredData = data.filter((episode) => {
        const airtime = new Date(episode.airstamp).getHours();
        return airtime >= 7 && airtime <= 11;
      });*/

      // Filter out episodes that are not airing today

      // Map the filtered data to an array of objects with the desired properties
      const mappedData = data.map((episode) => ({
        name: episode.show.name,
        startTime: new Date(episode.airstamp).getHours(),
        endTime: new Date(episode.airstamp).getHours() + Math.floor(episode.runtime / 60),
      }));

      console.log(mappedData);

      // Set the state to the mapped data
      setShows(mappedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, [day]);

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
