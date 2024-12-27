import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 임포트

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태 관리
  const navigate = useNavigate(); // useNavigate 훅 사용

  const cards = [
    {
      id: 1,
      title: '모나리자러버S2',
      image: 'https://img.wkorea.com/w/2024/05/style_6641b1396e954-913x1400.jpg',
      description:
        '다빈치의 모나리자는 프랑스 루브르 박물관에서 가장 인기 있는 회화작품이다. 수많은 관람객의 감상평은 제각각이다.',
    },
    {
      id: 2,
      title: '루브루초보',
      image: 'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2022%2F05%2Fmona-lisa-smeared-with-cake-by-climate-change-activist-01.jpg?q=90&w=1400&cbr=1&fit=max',
      description:
        '모나리자가 이빨을 드러내지 않고 미소를 짓고 있는 이유를 그 당시 시대상과 연관 지어 이야기하기도 한다. 당시에는 위생 관념의 부재와 적절한 치과 치료가 이루어지지 않아서, 다들 치아 상태가 좋지 않았다. 따라서 귀족들은 웃을 때 이빨을 드러내지 않은 채 입을 다물고 미소를 짓는 것이 예의라고 생각했다. 모나리자의 알 수 없는 미소도 다 빈치의 치밀한 계산이라기보다는 단순히 그 때 그 모델이 그 표정을 짓고 있었기 때문일지도 모른다.'
    },
    {
      id: 3,
      title: '방구석미술관',
      image:
        'https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2018/04/13/c_km601/5957354_540.jpg',
      description:
        '모나리자의 미소에서는 83%의 행복, 9%의 혐오감, 6%의 두려움이 담겨 있다.',
    },
  ];

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const nextCard = () => {
    setSwipeDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setSwipeDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleButtonClick = () => {
    navigate('/AlreadyReviewPage'); // 페이지 이동
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

      <Card>
        <HeartButton
          src={isLiked ? "/redHeart.png" : "/heart.png"}
          alt="좋아요 버튼"
          onClick={toggleLike}
        />
        <CardImage src={cards[currentIndex].image} alt={cards[currentIndex].title} />
        <CardContent>
          <CardTitle>{cards[currentIndex].title}</CardTitle>
          <CardDescription>{cards[currentIndex].description}</CardDescription>
        </CardContent>
      </Card>

      <Button onClick={handleButtonClick}>감상평 적기</Button>
      {swipeDirection && (
        <SwipeIcons visible isLeft={swipeDirection === 'left'}>
          <SwipeIcon
            src={swipeDirection === 'left' ? 'ic_arrow_left.png' : 'ic_arrow_right.png'}
            alt="스와이프 아이콘"
          />
        </SwipeIcons>
      )}
    </CardSliderContainer>
  );
}

export default CardSlider;
