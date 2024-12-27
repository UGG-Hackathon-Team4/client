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

  return (
    <MainContainer>
      <Header>
        <Title>{qrData.event || "전시명"}</Title>
        <Subtitle>전시에 오신 것을 환영합니다!</Subtitle>
      </Header>
      <ExhibitionInfo>
        <InfoRow>
          <Label>전시명</Label>
          <Value>{qrData.event}</Value>
        </InfoRow>
        <InfoRow>
          <Label>QR 찍은 날짜</Label>
          <Value>{qrData.date}</Value>
        </InfoRow>
        <InfoRow>
          <Label>전시 장소</Label>
          <Value>{qrData.location}</Value>
        </InfoRow>
      </ExhibitionInfo>
      <Notice>작품을 찍으면 감상 팁을 확인할 수 있어요!</Notice>
      <ActionButton onClick={handleNavigate}>작품 함께보기</ActionButton>
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

const ExhibitionInfo = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const Value = styled.span`
  font-size: 14px;
  color: #666;
`;

const Notice = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
  text-align: center;
`;

const ActionButton = styled.button`
  width: 90%;
  max-width: 400px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
