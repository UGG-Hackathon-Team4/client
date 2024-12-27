import styled from "styled-components";

const DetailPage = () => {
  return (
    <MainContainer>
      <Header>
        <HeadText>작품명</HeadText>
      </Header>
      <PhotoImage />
      <Description>
        설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
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
  height: 100vh;
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
`;

const EditButton = styled.button`
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
