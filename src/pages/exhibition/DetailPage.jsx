import styled from "styled-components";
import { useLocation } from "react-router-dom";


const DetailPage = () => {
    const location = useLocation();
    const title = location.state?.title;
    const text = location.state?.text;

  return (
    <MainContainer>
      <Header>
        <HeadText>{title}</HeadText>
      </Header>

      <PhotoImage />

      <Description>
        {text}
      </Description>
      
      <EditButton>수정하기</EditButton>
    </MainContainer>
  );
};

export default DetailPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

`;

const Header = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 10px 20px;

`;


const HeadText = styled.h1`
  font-size: 20px;
  color: #333;
  text-align: center;
  margin: 0;
`;

const PhotoImage = styled.div`
  width: 90%;
  height: 300px;
  margin: 20px 0;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  width: 90%;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
  height:200px;
`;

const EditButton = styled.button`
  width: 90%;
  max-width: 400px;
  padding: 10px;
  background-color: #F3C3B7;
  color: black;
  font-size: 16px;
  border: none;
  border-radius: 5px;
`;
