import styled from "styled-components";
import { useState } from "react";

const ReviewPage = () => {
  const [selectedOption, setSelectedOption] = useState("feedback"); // 초기 상태: 'feedback'

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <MainContainer>
      <Header>나의 감상평</Header>
      <Container>
        <Question>닉네임을 입력해주세요</Question>
        <Input placeholder="닉네임을 입력하세요" />
        <Question>전시회의 이름을 입력해주세요</Question>
        <Input placeholder="전시회의 이름을 입력하세요" />
        <Question>작품의 이름을 입력해주세요</Question>
        <Input placeholder="작품의 이름을 입력하세요" />
        <Question>
          <OptionText
            isSelected={selectedOption === "feedback"}
            onClick={() => handleOptionChange("feedback")}
          >
            의견을 남길래요!
          </OptionText>{" "}
          /{" "}
          <OptionText
            isSelected={selectedOption === "review"}
            onClick={() => handleOptionChange("review")}
          >
            감상만 남길래요!
          </OptionText>
        </Question>
        <Textarea
          placeholder={
            selectedOption === "feedback"
              ? "의견을 입력하세요"
              : "감상평을 입력하세요"
          }
        />
      </Container>
      <Button>작성 완료</Button>
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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
  margin-bottom: 20px;
  box-sizing: border-box;
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

const OptionText = styled.span`
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  color: ${({ isSelected }) => (isSelected ? "#333" : "#aaa")};
  cursor: pointer;

  &:hover {
    color: ${({ isSelected }) => (isSelected ? "#000" : "#666")};
  }
`;
