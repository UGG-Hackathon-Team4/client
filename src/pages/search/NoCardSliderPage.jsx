import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoCardSliderPage = () => {
  const [selectedOption, setSelectedOption] = useState("feedback");
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    navigate("/CardSlider");
  };

  return (
    <MainContainer>
      <Header>업로드된 감상이 없습니다.</Header>
      <Button onClick={handleSubmit}>작성 완료</Button>
    </MainContainer>
  );
};

export default NoCardSliderPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fdf6e4;
`;

const Header = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  margin-top: 300px;
`;



const Button = styled.button`
  margin-top: 300px;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  background-color: #F3C3B7;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #F3C3B7;
  }
`;