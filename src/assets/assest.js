/* eslint-disable no-unused-vars */

import mixedFruit from "./images/mixedFruit.webp";
import mixedVeggie from "./images/mixedVeggie.webp";
import crop from "./images/crop.webp";
import seafood from "./images/seafood.webp";
import mushroom from "./images/mushroom.webp";
import meat from "./images/meat.webp";

import logo from "./images/logo.png";
import textLogo from "./images/textLogo.webp";

export { logo, textLogo,};


export const largeCategoryList = [
  { id: 1, name: "채소류", image: mixedVeggie },
  { id: 2, name: "식량작물", image: crop },
  { id: 3, name: "과일류", image: mixedFruit },
  { id: 4, name: "축산물", image: meat },
  { id: 5, name: "수산물", image: seafood },
  { id: 6, name: "특용작물", image: mushroom },
];

//desc: ui colors
export const colors = {
  primary: "#00403d",
  secondary: "#2ecc71",
  accent: "#e74c3c",
  text: "#2c3e50",
  white2: "#ecf0f1",
  button1: "#2C3E50",
  button2: "#CB6040",
  hover1: "#49557e",
  hover2: "#a45f53",
  warning: "#d32f2f",
  paperbeige: "#F7F2EF",
  disable: "#d3d3d3",
  border: "#0c1e2a",
  link: "#8C6A4A",
  tableHead: "#a45f53",
  brown: "#7b482d",
  footerText: "#a45f53",
  buttonBorder: "#d3817a",
  rose: "#d3817a",
  green: "#00403d",
  darkBrown: "#4B2C20",
  backgroundColor: " #f8f8f8",
  gray: "#dedad7",
  page1: "#f2eee6",
  tableBackground: "#faf7f2",
};

//desc: admin answer list
export const adminAnswers = [
  { id: 1, answerType: "AI", text: "It's an answer by chat-gpt" },
  {
    id: 2,
    answerType: "RECEIVED_INQUIRY",
    text: "귀하의 문의가 정상적으로 접수되었습니다. 신속하게 답변드릴 수 있도록 최선을 다하겠습니다. 문의 사항에 대해 추가 정보가 필요할 경우, 고객님께 연락드리겠습니다. 감사합니다.",
  },
  {
    id: 3,
    answerType: "PROCESSING_IN_PROGRESS",
    text: "보내주신 요청에 대해 현재 담당 부서에서 검토 중입니다. 처리가 완료되는 대로 신속히 안내드리겠습니다. 더 궁금한 사항이 있으시면 언제든지 고객센터로 문의해 주세요. 감사합니다.",
  },
  {
    id: 4,
    answerType: "PROVIDE_SOLUTION",
    text: "불편을 드려 죄송합니다. 해당 문제는 [문제 원인]으로 발생한 것으로 보입니다. 아래의 방법을 시도해 주시길 권장 드립니다.",
  },
  {
    id: 5,
    answerType: "APOLOGIZE_FOR_SERVCIE_DELAY",
    text: "현재 예상치 못한 문제로 인해 서비스 제공에 다소 지연이 발생하고 있습니다. 고객님의 불편을 최소화하기 위해 최선을 다하고 있으며, 최대한 빠르게 정상화하도록 노력 중입니다. 이용에 불편을 드린 점 진심으로 사과드리며, 양해 부탁드립니다.",
  },
  {
    id: 6,
    answerType: "REQUEST_ADDITIONAL_INFO",
    text: "보내주신 문의에 대해 더 자세히 확인해드리기 위해 추가적인 정보가 필요합니다. 아래 정보를 회신해 주시면 보다 신속하게 도움 드릴 수 있도록 하겠습니다.",
  },
];
