import styled from "styled-components";
import PhotoItem from "../../components/PhotoItem";
import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const naivgate = useNavigate();
  const handleNavigate = ()=>{
    naivgate('/ReviewPage');
  }

  return (
    <MainContainer>
      <Header>
        <HeadText>전시회명</HeadText>
        <AddPhotoButton onClick={handleNavigate}>+ 작품 추가</AddPhotoButton>
      </Header>
      <PhotoList>
        {[1, 2, 3, 4].map((title, index) => (
          <PhotoItem title = {title} key={index}/>

        ))}
      </PhotoList>
      <Pagination>
        <PageNumber>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>4</PageNumber>
        <PageNumber>5</PageNumber>
      </Pagination>
    </MainContainer>
  );
};

export default GalleryPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
  
const HeadText = styled.h1`
  font-size: 24px;
  color: #333;
`;

const AddPhotoButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 14px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PhotoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;



const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.span`
  font-size: 14px;
  color: #333;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
