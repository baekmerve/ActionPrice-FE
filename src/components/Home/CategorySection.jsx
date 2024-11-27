/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import { colors } from "../../assets/assest";

const CategorySection = ({ categories, error }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`api/category/${category.name}`);
  };

  if (error) {
    return (
      <Container id="categories" sx={{ py: 5 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }
  return (
    <Box
      id="categories"
      sx={{
        minHeight: "100vh",
        //  backgroundColor: colors.green,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        margin: 1,
        borderRadius: "25px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: "-0.02rem",
            color: "#00403d",
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "2rem" },
            lineHeight: 1.5,
          }}
        >
          <Typewriter
            words={["전국의 다양한 거래 정보를 한 눈에 확인하세요."]}
            loop={true}
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={2000}
            cursor={true}
            cursorStyle="|"
          />
        </Typography>

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            width: "60%",
            fontSize: { xs: "1rem", ms: "1.3rem", md: "1.5rem" },
            lineHeight: 1.5,
            marginTop: "1rem",
            color: colors.brown,
          }}
        >
          전국의 도매 시장에서 거래되는 채소, 축산물, 과일, 식량작물, 수산물,
          특용작물 등의 가격 데이터를 제공합니다. 현재 거래되는 가격이 궁금한
          식자재 품목을 선택하세요.
        </Typography>
      </Box>

      {/* <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        margin={3}
        sx={{
          borderRadius: "15px",
          width: "80%",
        }}
      >
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id} marginBottom={3}>
            <Card
              onClick={() => handleCategoryClick(category)}
              sx={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: 3,
                borderRadius: 2,

                "&:hover": {
                  boxShadow: 10,
                  transform: "scale(1.05)",
                  "& .overlay": {
                    transform: "translateY(0)",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                image={`${category.image}`}
                alt={category.name}
                loading="lazy"
                sx={{
                  height: 300,
                  width: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.85)",
                  transition: "filter 0.5s ease",
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  transform: "translateY(100%)",
                  transition: "transform 0.6s ease",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" component="div">
                  {category.name}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        margin={3}
        sx={{
          width: "80%",
        }}
      >
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.id}>
            <Card
              onClick={() => handleCategoryClick(category)}
              sx={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: 3,

                "&:hover": {
                  transform: "translateY(-5px) scale(1.03)",
                  boxShadow: 8,
                  "& .overlay": {
                    transform: "translateY(0)",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  },
                },
              }}
            >
              {/* Card Image */}
              <CardMedia
                component="img"
                image={category.image}
                alt={category.name}
                loading="lazy"
                sx={{
                  height: 250,
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease, filter 0.4s ease",
                  filter: "brightness(0.8)",
                }}
              />

              {/* Gradient Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  transform: "translateY(100%)",
                  transition: "transform 0.6s ease",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4" component="div">
                  {category.name}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default CategorySection;
