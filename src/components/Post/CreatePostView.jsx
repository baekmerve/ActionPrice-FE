/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useState } from "react";

import {
  Paper,
  Typography,
  Button,
  TextField,
  Snackbar,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/slices/postSlice";
import { useNavigate } from "react-router-dom";
import { colors } from "../../assets/assest";
import Swal from "sweetalert2";

const CreatePostView = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [isSecret, setIsSecret] = useState(false); // State for secret mode

  const dispatch = useDispatch();
  const navigate = useNavigate(); // For navigation

  // const username = useSelector((state) => state.login.username);
  const username = localStorage.getItem("username");

const handleCreatePost = async () => {
  if (!title || !content) {
    Swal.fire({
      title: "제목과 내용은 필수입니다",
      text: "두 필드를 모두 작성하세요.",
      icon: "error",
      showConfirmButton: "yes",
    });
    return;
  }
  try {
    const postData = {
      title,
      content,
      username,
      published: !isSecret,
    };
    const createdPost = await dispatch(createPost(postData)).unwrap();
    console.log("createdPost:", createdPost);
    Swal.fire({
      title: "게시글 등록 완료!",
      text: "성공적으로 생성되었습니다.",
      icon: "success",
      timer: 2000,
    });
    navigate(`/api/post/${createdPost.postId}/detail`);
  } catch (error) {
    if (error === "유효성 검증에 실패했습니다.") {
      Swal.fire({
        text: "제목은 30자 이내로 작성해야 합니다",
        icon: "error",
        showConfirmButton: "yes",
      });
    }
  }
};


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: colors.darkBrown }}>
        문의 내용을 작성해주세요
      </Typography>
      <Box
        sx={{
          margin: 4,
          padding: 4,
          textAlign: "center",
          backgroundColor: colors.paperbeige,
          border: `2px solid ${colors.brown}`,
          borderRadius: "15px",
          boxShadow: 3,
          minWidth: { md: "1000px" },
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}
        >
          <TextField disabled id="outlined-disabled" value={username || ""} />
        </Box>
        <TextField
          label="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          variant="outlined"
          required
          sx={{
            marginTop: 2,
          }}
        />
        <TextField
          label="문의 내용"
          multiline
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant="outlined"
          fullWidth
          required
          sx={{ marginTop: 2, marginBottom: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isSecret}
              onChange={(e) => setIsSecret(e.target.checked)}
              color="primary"
            />
          }
          label="비밀글"
        />

        <Button
          variant="outlined"
          onClick={handleCreatePost}
          sx={{
            marginLeft: "10px",
            border: `2px solid ${colors.green}`,
            color: colors.green,
          }}
        >
          게시글 등록
        </Button>
        <Button
          variant="outlined"
          onClick={() => window.history.back()}
          sx={{
            marginLeft: "10px",
            border: `2px solid ${colors.brown}`,
            color: colors.brown,
          }}
        >
          취소
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePostView;
