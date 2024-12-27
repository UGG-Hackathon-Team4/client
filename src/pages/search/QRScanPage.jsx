import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QrReader from "react-qr-scanner";

const QRScanPage = () => {
  const [qrData, setQrData] = useState(null);
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
    console.log(JSON.parse(data.text));
      setQrData(JSON.parse(data.text)); // QR 데이터 파싱
      navigate("/nextPage", { state: { qrData: JSON.parse(data.text) } }); // 다음 페이지로 이동
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <MainContainer>
      <Header>QR을 스캔하세요</Header>
      <ScanContainer>
        <QrReader
          delay={300}
          style={{ width: "100%" }}
          onError={handleError}
          onScan={handleScan}
        />
      </ScanContainer>
      {qrData && (
        <ResultContainer>
          <h3>QR 코드 데이터:</h3>
          <pre>{JSON.stringify(qrData, null, 2)}</pre>
        </ResultContainer>
      )}
    </MainContainer>
  );
};

export default QRScanPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ScanContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ResultContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
