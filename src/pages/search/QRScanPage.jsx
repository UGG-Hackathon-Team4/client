import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import QrScanner from "qr-scanner";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QRScanPage = () => {
  const [qrData, setQrData] = useState(null);
  const [qrError, setQrError] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  // QR 코드 스캔 결과 처리

  const handleScan = async (data) => {
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setQrData(parsedData); // QR 데이터 저장

        console.log("서버 응답:", response.data);

        // 서버 응답 데이터를 포함하여 다음 페이지로 이동
        navigate("/QRDataPage", { state: { qrData: parsedData } });
      } catch (error) {
        console.error("QR 데이터 파싱 실패:", error);
        setQrError(true);
      }
    }
  };

  useEffect(() => {
    QrScanner.hasCamera().then((hasCamera) => {
      console.log("실행됨");
      if (!hasCamera) {
        setQrError(true);
      } else {
        const videoElem = videoRef.current;
        if (videoElem) {
          const qrScanner = new QrScanner(
            videoElem,
            (result) => {
              console.log("QR 스캔 결과:", result);
              handleScan(result.data); // QR 데이터 전달
            },
            {
              preferredCamera: "environment",
              maxScansPerSecond: 5,
              highlightScanRegion: true,
            }
          );

          qrScanner.start().catch((err) => setQrError(true));

          return () => qrScanner.destroy();
        }
      }
    });
  }, []);

  const handleNavigate = () => {
    navigate("/QRDataPage");
  };

  return (
    <MainContainer>
      <Header>QR을 스캔하세요</Header>
      <ScanContainer>
        {!qrError && (
          <video
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            ref={videoRef}
          />
        )}
        {qrError && (
          <ErrorMessage>
            <p>카메라를 사용할 수 없습니다.</p>
            <small>
              카메라 권한을 허용하거나 QR 리더기를 직접 실행해주세요.
            </small>
          </ErrorMessage>
        )}
      </ScanContainer>
      {qrData && (
        <ResultContainer>
          <h3>QR 코드 데이터:</h3>
          <pre>{JSON.stringify(qrData, null, 2)}</pre>
        </ResultContainer>
      )}
      <button onClick={handleNavigate}>일단 넘어가기</button>
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
  height: 600px;
  border: 2px solid black;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 14px;
  color: #666;
`;

const ResultContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
