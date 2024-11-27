/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors, slideImageList } from "../../assets/assest";

const EventSlide = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Desktop and up
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
     
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
     
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        // minHeight: "100vh", // Full height of the viewport
        paddingY: 5,
        margin: 1,
        borderRadius: "25px",
        position: "relative",
        // backgroundColor: colors.page1,
      }}
    >
      <Typography
        sx={{
          width: "50%",
          fontFamily: "Quicksand, sans-serif",
          fontWeight: 600,
          fontSize: { xs: "1.5rem", md: "2rem" }, // Increase font size
          lineHeight: 1.6,
          color: colors.green,
          letterSpacing: "-0.02rem",
          position: "absolute",
          top: { xs: "5%", md: "10%" },
          zIndex: 1,
        }}
      >
        저희는
        <br />
        전국의 도매 시장에서 거래되는
        <br />
        다양한 농수산축산물의 가격 정보를 제공합니다.
      </Typography>

      <div
        className="slider-container"
        style={{
          maxWidth: "100%",
          marginTop: "15rem",
          alignContent: "center",
          zIndex: 2,
          borderRadius: "15px",
        }}
      >
        <Slider {...settings}>
          {slideImageList.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: "320px",

                overflow: "hidden",
                padding: "5px",
                borderRadius: "15px",
                backgroundColor: "#00403d",
              }}
            >
              <img
                src={`${image.image}`}
                alt={`Slide ${index + 1}`}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.09)",
                  borderRadius: "15px",
                }}
              />
            </Box>
          ))}
        </Slider>
      </div>

    </Box>
  );
};

export default EventSlide;
