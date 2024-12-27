import { useState } from "react";
import QRCode from "qrcode";
import styled from "styled-components";

const QRGenerator = () => {
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = async () => {
    try {
      const fixedData = JSON.stringify({
        event: "전시회",
        location: "서울",
        date: "2024-12-31",
      });
      const url = await QRCode.toDataURL(fixedData);
      setQrCode(url);
    } catch (error) {
      console.error("Failed to generate QR Code", error);
    }
  };

  return (
    <Container>
      <Header>QR 코드 생성기</Header>
      <Button onClick={generateQRCode}>QR 코드 생성</Button>
      {qrCode && (
        <QRCodeImage>
          <img src={qrCode} alt="Generated QR Code" />
        </QRCodeImage>
      )}
    </Container>
  );
};

export default QRGenerator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const QRCodeImage = styled.div`
  margin-top: 20px;

  img {
    width: 200px;
    height: 200px;
  }
`;
