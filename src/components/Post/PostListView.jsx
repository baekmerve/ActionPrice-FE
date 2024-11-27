/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { format } from "date-fns";

import { colors } from "../../assets/assest";

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

//any potential issues if postList is undefined by initializing it to an empty array.
const PostListView = ({ postList = [], pageNum }) => {
  const itemsPerPage = 10;
  const logined_username = localStorage.getItem("username");
  const role = localStorage.getItem("role");

  console.log("check postList in PostList component:", postList);
  console.log("checking role in postList:", role);
  console.log("checking logined_username in postList:", logined_username);

  const formatDate = (date) => {
    try {
      return format(new Date(date), "yyyy-MM-dd"); // Format as 'yyyy-mm-dd'
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  return (
    <Box
      sx={{
        marginTop: 2,
        marginBottom: 2,
        borderRadius: "15px",
        boxShadow: 3,
      }}
    >
      <Table aria-label="custom styled table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>등록일</StyledTableCell>
            <StyledTableCell>제목</StyledTableCell>
            <StyledTableCell>작성자</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postList && postList.length > 0 ? (
            postList.map((post, index) => (
              <TableRow
                key={post.postId}
                sx={{
                  "&:nth-of-type(even)": {
                    backgroundColor: "#f9f9f9",
                  },
                  "&:nth-of-type(odd)": {
                    backgroundColor: "#F7F2EF",
                  },
                  "&:hover": {
                    backgroundColor: "#f2eee6",
                  },
                }}
              >
                <TableCell>
                  {(pageNum - 1) * itemsPerPage + index + 1}
                </TableCell>
                <TableCell>{formatDate(post.createdAt)}</TableCell>
                <TableCell>
                  {!post.published &&
                  logined_username !== post.username &&
                  role !== "ROLE_ADMIN" ? (
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <LockIcon style={{ marginRight: 5 }} /> 비밀 글입니다.
                    </span>
                  ) : (
                    <Link
                      to={`/api/post/${post.postId}/detail?page=1`}
                      style={{
                        color: colors.green,
                        fontStyle: "italic",
                      }}
                    >
                      {post.title}
                    </Link>
                  )}
                </TableCell>
                <TableCell>{post.username}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <Typography>게시글이 없습니다</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};

export default PostListView;
