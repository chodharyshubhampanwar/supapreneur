import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Router>
        <div>
          <Routes>
            <Route path="blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Home;
