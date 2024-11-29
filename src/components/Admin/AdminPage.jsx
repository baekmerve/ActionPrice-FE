/* eslint-disable no-unused-vars */
// src/pages/AdminPage.js

import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { colors } from "../../assets/assest.js";

import { Link, useSearchParams } from "react-router-dom";
import { Avatar, Box, Pagination, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserList,
  blockUser,
  resetRefreshToken,
} from "../../redux/slices/adminPageSlice";
import { Button } from "@mui/material";
import PostSearch from "../Post/PostSearch.jsx";

const StyledTableCell = (props) => (
  <TableCell
    {...props}
    sx={{
      fontWeight: "bold",
      backgroundColor: colors.tableHead,
      color: "white",
    }}
  />
);

const AdminPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNum = parseInt(searchParams.get("pageNum")) || 1;
  const keyword = searchParams.get("keyword") || "";
  const { userList, totalPageNum, error, userNumber } = useSelector(
    (state) => state.adminPage
  );

  // Fetch user list based on page number and keyword
  useEffect(() => {
    dispatch(fetchUserList({ pageNum: pageNum - 1, keyword }));
  }, [dispatch, pageNum, keyword]);

  //function: Handle search submission //
  const handleSearch = (searchKeyword) => {
    setSearchParams({ keyword: searchKeyword, pageNum: 1 }); // Reset to page 1 on new search
    console.log("api call for fetchUserList-handleSearch submission");
    dispatch(fetchUserList({ pageNum: 0, keyword: searchKeyword })); // Fetch user list with new keyword
  };
  //function: handleResetSearch  submission //
  const handleResetSearch = () => {
    setSearchParams({ pageNum: 1 }); // Reset to the first page
  };

  const handlePageChange = (event, value) => {
    if (value < 1) return; // Prevent navigating to less than page 1
    setSearchParams({ pageNum: value, keyword });
  };

  const handleBlockUser = (username) => {
    dispatch(blockUser(username));
  };

  const handleResetRefreshToken = (username) => {
    dispatch(resetRefreshToken(username));
  };

  if (error) return <Typography color="error">{`Error: ${error}`}</Typography>;

  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          marginY: 2,
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-end",
          justifyContent: "center",
          paddingX: 10,
        }}
      >
        <Typography sx={{ paddingLeft: 3 }}>
          전체 사용자:{" "}
          <span style={{ fontSize: "30px", color: colors.green }}>
            {userNumber}
          </span>{" "}
          명
        </Typography>

        <PostSearch
          keyword={keyword}
          onSearch={handleSearch}
          onReset={handleResetSearch}
        />
      </Box>
      <TableContainer
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          width: "90%",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Table aria-label="User List Table">
          <TableHead>
            <TableRow sx={{ height: "80px" }}>
              <StyledTableCell>
                <Typography variant="body1"></Typography>
              </StyledTableCell>

              <StyledTableCell>
                <Typography variant="body1">유저네임</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body1">이메일</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body1">게시글</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body1">뎃글 수</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body1">관리</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body1">차단 / 해제</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Typography variant="body1">토큰 리셋</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {userList.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  해당 키워드로 사용자나 이메일을 찾을 수 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              userList.map((user, index) => (
                <TableRow key={user.username}>
                  <TableCell></TableCell>
                  <TableCell>
                    <Link
                      to={`/api/mypage/${user.username}/myposts`}
                      style={{ color: colors.button1, textDecoration: "none" }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          sx={{
                            bgcolor: colors.green,
                            color: "white",
                            width: 30,
                            height: 30,
                            marginRight: 2,
                          }}
                        />

                        <Typography variant="body1">{user.username}</Typography>
                      </Box>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{user.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Link
                      to={`/api/mypage/${user.username}/myposts`}
                      style={{ color: colors.button1 }}
                    >
                      <Typography variant="body1">{user.postCount}</Typography>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{user.commentCount}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{user.authorities}</Typography>
                  </TableCell>
                  <TableCell>
                    {user.tokenExpiresAt === null ? (
                      <Typography variant="body1">None</Typography>
                    ) : (
                      <Button
                        variant="contained"
                        sx={{
                          padding: "3px 2px",
                          backgroundColor: colors.green,
                          color: "white",
                          "&:hover": {
                            backgroundColor: colors.warning,
                            color: "white",
                          },
                        }}
                        onClick={() => handleBlockUser(user.username)}
                      >
                        {user.blocked ? "Unblock" : "Block"}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.tokenExpiresAt === null ? (
                      <Typography variant="body1">None</Typography>
                    ) : (
                      <Button
                        variant="contained"
                        sx={{
                          padding: "3px 2px",
                          backgroundColor: colors.darkBrown,
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleResetRefreshToken(user.username)}
                      >
                        Reset
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Pagination
          count={totalPageNum} // Total number of pages from Redux state
          page={pageNum} // Current page
          onChange={handlePageChange}
          variant="outlined"
          sx={{ margin: 2 }}
        />
      </Box>
    </Box>
  );
};

export default AdminPage;
