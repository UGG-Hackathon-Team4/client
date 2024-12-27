import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트
import { useEffect } from 'react';
import axios from 'axios';

// 스타일 정의
const CardSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  position: relative;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  background: linear-gradient(180deg, rgba(243, 195, 183, 0.4) 0%, rgba(243, 195, 183, 1) 32%);
  position: relative;
`;

const CardImage = styled.img`
  width: 70%;
  height: 200px;
  margin-top: 40px;
  object-fit: contain;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h2`
  margin: 10px 0;
  font-size: 14px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const HeartButton = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const SwipeIcons = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.isLeft ? '5%' : '95%')};
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
    `}
`;

const SwipeIcon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.7;
  transition: opacity 0.5s ease;
`;

const Button = styled.button`
  margin-left: auto;
  width: 80%;
  height: 50px;
  margin-right: auto;
  display: block;
  background-color: #f3c3b7;
  border: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 10px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1a899;
  }
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

function CardSlider() {
  const [serverCards, setServerCards] = useState([]); // 서버에서 가져온 데이터 저장
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  // 기존 이미지와 기본 데이터
  const cards = [
    {
      id: 1,
      image: "https://img.wkorea.com/w/2024/05/style_6641b1396e954-913x1400.jpg",
    },
    {
      id: 2,
      image: "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F05%2Fmona-lisa-smeared-with-cake-by-climate-change-activist-01.jpg?q=90&w=1400&cbr=1&fit=max",
    },
    {
      id: 3,
      image: "https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2018/04/13/c_km601/5957354_540.jpg",
    },
  ];

  // 기본 이미지
  const defaultImage = "https://via.placeholder.com/300";

  // 서버에서 데이터 가져오기
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/comment/likes");
      console.log("서버 데이터:", response.data);

      // 서버에서 가져온 데이터와 기존 이미지 배열의 길이를 맞추기
      const transformedCards = response.data.success.map((item, index) => ({
        ...item,
        image: cards[index]?.image || defaultImage, // 이미지가 없으면 기본 이미지 사용
      }));

      setServerCards(transformedCards); // 상태에 저장
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const nextCard = () => {
    setSwipeDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serverCards.length);
  };

  const prevCard = () => {
    setSwipeDirection("left");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serverCards.length) % serverCards.length);
  };

  const handleButtonClick = () => {
    navigate("/AlreadyReviewPage");
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <CardSliderContainer {...swipeHandlers}>
      <Header>
        <Title>[모나리자]의 감상평</Title>
      </Header>

      {serverCards.length > 0 ? (
        <Card>
          <HeartButton
            src={isLiked ? "/redHeart.png" : "/heart.png"}
            alt="좋아요 버튼"
            onClick={toggleLike}
          />
          <CardImage src={serverCards[currentIndex].image} alt={`Card ${currentIndex}`} />
          <CardContent>
            <CardTitle>{serverCards[currentIndex]?.artwork?.title || "제목 없음"}</CardTitle>
            <CardDescription>
              {serverCards[currentIndex]?.description || "설명이 없습니다."}
            </CardDescription>
          </CardContent>
        </Card>
      ) : (
        <p>로딩 중...</p>
      )}

      <Button onClick={handleButtonClick}>감상평 적기</Button>
      {swipeDirection && (
        <SwipeIcons visible isLeft={swipeDirection === "left"}>
          <SwipeIcon
            src={swipeDirection === "left" ? "ic_arrow_left.png" : "ic_arrow_right.png"}
            alt="스와이프 아이콘"
          />
        </SwipeIcons>
      )}
    </CardSliderContainer>
  );
}

export default CardSlider;
