import styled from "styled-components";
import PhotoItem from "../../components/PhotoItem";
import { useNavigate,useLocation } from "react-router-dom";

const GalleryPage = () => {
  const naivgate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;
  const handleNavigate = ()=>{
    naivgate('/ReviewPage');
  }

  const data = {
    title:"작품명",
    text:"작품설명작품설명작품설명작품설명작품설명작품설명"
  }


  return (
    <MainContainer>
      <Header>
        <HeadText>{title}</HeadText>
        <AddPhotoButton onClick={handleNavigate}>+ 작품 추가</AddPhotoButton>
      </Header>
      <PhotoList>
        {[data,data,data,data].map((data, index) => (
          <PhotoItem data = {data} key={index}/>

        ))}
      </PhotoList>
      <Pagination>
      <PageNumber>&lt;</PageNumber>
        <PageNumber>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>4</PageNumber>
        <PageNumber>5</PageNumber>
        <PageNumber>&gt;</PageNumber>
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
  background-color: #F3C3B7;
  color: black;
  font-size: 14px;
  width:100px;
  height:35px;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #D99E8F;
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
