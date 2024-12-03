import React from "react"; // Import React if using a version prior to React 17
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
};

export default App;
