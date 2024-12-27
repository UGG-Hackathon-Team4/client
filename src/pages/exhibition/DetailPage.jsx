import styled from "styled-components";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return <ErrorMessage>잘못된 접근입니다.</ErrorMessage>;
  }

  const handleButtonClick = () => {
  };

  return (
    <DetailContainer>
      <Title>{item.title}</Title>
      <Image src={item.imageUrl} alt={item.title} />
      <TextContainer>
        <Text>{item.text}</Text>
      </TextContainer>
      <StyledButton onClick={handleButtonClick}>
        수정하기
      </StyledButton>

    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
  margin-top: 10px;
  line-height: 1.5;
`;

const ErrorMessage = styled.div`
  font-size: 18px;
  color: red;
  text-align: center;
`;

const StyledButton = styled.button`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  background-color: #f3c3b7;
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e8b99c;
  }
`;


