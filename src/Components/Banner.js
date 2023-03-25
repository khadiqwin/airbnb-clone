import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Banner.css";
import { Button } from "@mui/material";
const Banner = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination.</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Link to="/search">
          <Button variant="outlined" onClick={() => navigate("/search")}>
            Explore Nearby
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
