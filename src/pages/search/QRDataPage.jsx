import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const QRDataPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // QRData를 state로부터 가져옴
  const qrData = location.state?.qrData || { event: "데이터 없음", location: "알 수 없음", date: "알 수 없음" };

  const handleNavigate = () => {
    navigate("/SearchPhotoPage");
  };


  // 버튼 클릭 시 실행될 함수
  const handleButtonClick = () => {
    navigate("/SearchPhotoPage");
  };

  return (
    <MainContainer>
      <Header>
        <Title>{qrData.event || "전시명"}</Title>
        <Subtitle>전시에 오신 것을 환영합니다!</Subtitle>
      </Header>

      <TicketContainer >
        <TicketBackground>
          <TicketContent>
            <TicketDate>{qrData.date}</TicketDate>
            <TicketTitle>{qrData.event}</TicketTitle>
            <TicketLocation>{qrData.location}</TicketLocation>
          </TicketContent>
        </TicketBackground>
      </TicketContainer>

      {/* 사진찍기 버튼 추가 */}
      <ActionButton onClick={handleButtonClick}>
        작품 함께보기
      </ActionButton>
    </MainContainer>
  );
};

export default QRDataPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
`;

const TicketContainer = styled.div`
  width: 305px;
  height: auto;
`;

const TicketBackground = styled.div`
  width: 100%;
  height: 162px;
  background: url("/public/ticket.png") no-repeat center/contain;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const TicketDate = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`;

const TicketTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const TicketLocation = styled.div`
  font-size: 14px;
  color: #999;
`;

// 사진찍기 버튼 스타일
const ActionButton = styled.button`
  margin-top: 350px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  background-color: #f3c3b7;
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #f1b28b;
  }
`;
