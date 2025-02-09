import React from "react";
import "./Home.css";
import { Box, Typography } from "@mui/material";
import HomeImage from "./Pictures/Home.png";
import AboutUs from "../About/Aboutus";
import Carousel from "../Home/PopularBooks";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <Box className="hero-section" sx={{ textAlign: "center", p: 4, background: "#774dd3", color: "white" }}>
        <img src={HomeImage} alt="Hero" className="hero-image" />
        <Typography variant="h3" fontWeight="bold">Welcome to BookWorm</Typography>
        <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
          Discover a world of books at your fingertips.
        </Typography>
      </Box>

      {/* Popular Books Carousel */}
      <Box className="carousel">
        <Carousel />
      </Box>

      {/* About Us Section */}
      <Box className="about-us-section">
        <AboutUs />
      </Box>
    </div>
  );
};

export default HomePage;
