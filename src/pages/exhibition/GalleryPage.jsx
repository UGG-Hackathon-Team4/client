import styled from "styled-components";
import PhotoItem from "../../components/PhotoItem";
import { useNavigate, useLocation } from "react-router-dom";

const GalleryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;

  const handleNavigate = () => {
    navigate('/ReviewPage');
  };

  const data = [
    {
      title: "모나리자",
      text: "다빈치의 모나리자는 프랑스 루브르 박물관에서 가장 인기 있는 회화작품이다. 수많은 관람객의 감상평은 제각각이다.",
      imageUrl: "https://i.namu.wiki/i/HRitIun-bFhfBmD5I81Sb9B3rCv7VIUBMOk3vGPvK-QjQodEG37NButl5BZ8sIPLlXh0Nk6m1_Krc6lNXyAIlg.jpg",
    },
    {
      title: "최후의 만찬",
      text: "레오나르도 다빈치는 라이벌 미켈란젤로를 의식해서 제작한 작품이 <최후의 만찬>다. 전통적인 프레스코 기법을 배척한 레오나르도 다빈치는 새로운 방식으로 이 작품을 제작한다.",
      imageUrl: "https://www.kunews.ac.kr/news/photo/201303/18906_13510_591.jpg",
    },
    {
      title: "음악가의 초상",
      text: "다빈치의 유일한 남자 모델. 이 그림 '음악가의 초상'이 예술가를 아직 기술자로 생각하던 시기에 그려진 예술가의 초상화란 사실이다.",
      imageUrl: "https://ojsfile.ohmynews.com/STD_IMG_FILE/2015/1001/IE001876691_STD.JPG",
    },
  ];

  return (
    <MainContainer>
      <Header>
        <HeadText>{title}</HeadText>
        <AddPhotoButton onClick={handleNavigate}>+ 작품 추가</AddPhotoButton>
      </Header>
      <PhotoList>
        {data.map((item, index) => (
          <PhotoItem key={index} data={item} />
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
  width: 100px;
  height: 35px;
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
