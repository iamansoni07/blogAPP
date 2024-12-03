import React from "react"; // Import React if using a version prior to React 17
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/signin" element={<h1>Sign in page</h1>} />
    </Routes>
  );
};

export default App;
