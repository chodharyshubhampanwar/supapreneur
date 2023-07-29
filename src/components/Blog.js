import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1>My Blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Blog Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Blog;
