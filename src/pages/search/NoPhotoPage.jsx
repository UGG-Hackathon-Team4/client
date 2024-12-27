import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NoPhotoPage = () => {
    const navigate = useNavigate();

    const handleNavigate = ()=>{
        navigate('/ReviewPage');
    }
  return (
    <MainContainer>
      <Container>
        <Header>업로드된 감상이 없습니다.</Header>
        <Button onClick={handleNavigate}>감상평 적기</Button>
      </Container>
    </MainContainer>
  );
};

export default NoPhotoPage;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top:300px;
  width: 100vw;
  height: 100vh;
  background-color: #fdf6e4; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #f28c8c; /* 연한 분홍색 */
  color: white;
  border: none;
  border-radius: 20px; /* 둥근 모서리 */
  cursor: pointer;

  &:hover {
    background-color: #d97171; /* 호버 시 진한 분홍색 */
  }

  &:active {
    background-color: #bf5b5b; /* 클릭 시 더 진한 분홍색 */
  }
`;
