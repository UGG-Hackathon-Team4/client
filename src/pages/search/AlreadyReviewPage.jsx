import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 임포트

const ReviewPage = () => {
  const [selectedOption, setSelectedOption] = useState("feedback"); // 초기 상태: 'feedback'
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    // 작성 완료 후 '/CardView'로 이동
    navigate("/CardSlider");
  };

  return (
    <MainContainer>
      <Header>나의 감상평</Header>
      <Container>
        <Question>
          <OptionWrapper>
            <OptionText
              isSelected={selectedOption === "feedback"}
              onClick={() => handleOptionChange("feedback")}
            >
              의견을 남길래요!
            </OptionText>
            <OptionText
              isSelected={selectedOption === "review"}
              onClick={() => handleOptionChange("review")}
            >
              감상만 남길래요!
            </OptionText>
          </OptionWrapper>
        </Question>
        <Textarea
          placeholder={
            selectedOption === "feedback"
              ? "텍스트를 입력해주세요"
              : "텍스트를 입력해주세요"
          }
        />
      </Container>
      <Button onClick={handleSubmit}>작성 완료</Button>
    </MainContainer>
  );
};

export default ReviewPage;

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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

const Question = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
  margin-top: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  border: none;
  border-bottom: 2px solid black;
  font-size: 14px;
  margin-bottom: 30px;
  box-sizing: border-box;
  background: transparent;
`;

const Textarea = styled.textarea`
  margin-top: 15px;
  width: 100%;
  height: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
  margin-bottom: 20px;
  box-sizing: border-box;
  margin-bottom: 150px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  background-color: #f28c8c;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #d97171;
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OptionText = styled.span`
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  color: ${({ isSelected }) => (isSelected ? "#333" : "#aaa")};
  cursor: pointer;
  padding: 5px 10px;
  background-color: ${({ isSelected }) => (isSelected ? "#FFDDD4" : "#f2f2f2")};
  border-radius: 5px;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#FFDDD4" : "#f0f0f0")};
  }
`;
