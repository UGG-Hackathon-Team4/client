import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  const navigate = useNavigate();

  // 작품찾기 페이지 이동 함수
  const handleOnClick = () => {
    navigate("/MyTicketPage");
  };

  return (
    <MainContainer>

      <ContentWrapper>
        <ProfileImage />

        <TextContainer>
          <Subtitle>미감을 높이는 우리의 터전</Subtitle>
        </TextContainer>

      </ContentWrapper>

      <ButtonContainer>
        <LoginButton onClick={handleOnClick}>로그인</LoginButton>
        <LoginButton >전시 등록(주최사)</LoginButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 200px;
  width: 100vw;
  height: 100vh;

  padding: 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 130px;
`;

const ProfileImage = styled.div`

  transform: translateX(-15px);
  width: 160px;
  height: 75px;
  background-image: url("/Logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: black;
  margin: 0;
`;


const ButtonContainer = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-bottom: 50px;
`;

const LoginButton = styled.button`
  width: 315px;
  max-width: 300px;
  padding: 15px 0;
  font-size: 16px;
  color: black;
  background-color: #F3C3B7;
  border: none;
  border-radius: 8px;
  

  &:hover {
    background-color: #D99E8F;
  }

  &:active {
    background-color: #D99E8F;
  }
`;