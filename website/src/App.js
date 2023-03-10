import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";

import Calender from "./Components/Calender";
import EachHour from "./Components/EachHour";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route exact path="/:day" index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
