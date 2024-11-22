/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import Sidebar from "../components/MyPage/Sidebar";

import { Route, Routes, useParams } from "react-router-dom";

import { Box } from "@mui/material";

const Favorites = React.lazy(() => import("../components/MyPage/Favorites"));
const MyPosts = React.lazy(() => import("../components/MyPage/MyPosts"));

const MyPage = () => {
  const { username } = useParams();

  console.log("getting username from url", username);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        ml: "10rem",
        minHeight: "100vh",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          pt: 10,
           width: "calc(100% - 250)",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="myposts" element={<MyPosts username={username} />} />
            <Route
              path="wishlist"
              element={<Favorites username={username} />}
            />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
};

export default MyPage;
