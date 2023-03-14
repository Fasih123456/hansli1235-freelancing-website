import React from "react";

import Calender from "../Components/Calender";
import { useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

function Homepage() {
  return (
    <React.Fragment>
      <Calender />
    </React.Fragment>
  );
}

export default Homepage;
