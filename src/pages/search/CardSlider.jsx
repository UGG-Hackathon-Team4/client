import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'; // react-swipeable 라이브러리 사용
import styled, { css } from 'styled-components'; // styled-components 사용

const CardSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  position: relative; /* swipe 아이콘을 카드와 겹치게 배치하려면 relative 위치 필요 */
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
  background-color: #f3c3b7;
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

function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const cards = [
    {
      id: 1,
      title: '모나리자러버S2',
      image:
        'https://i.namu.wiki/i/UcYMOZDHIlu0Isx5ALJ1ZCSNLwaNOHvIm36Qq4tIF2LbkcPqlswVyukN53_fW6-XzS3XNBE6I_FcjWgmYTgwlNMzUI-qlcuQbz6IQny9Uzg-YFgWB-5v58xv6JxTZiAbVimNZO9eHB6MZjKBlmzU1A.jpg',
      description:
        '다빈치의 모나리자는 프랑스 루브르 박물관에서 가장 인기 있는 회화작품이다. 수많은 관람객의 감상평은 제각각이다. 예컨대 영국의 극작가 노엘 코워드 경은 ‘그녀는 좀 아픈 사람처럼 보인다’고 말했다.',
    },
    {
      id: 2,
      title: '루브루초보',
      image: 'https://cdn.sisajournal.com/news/photo/202403/284239_206126_5852.jpg',
      description:
        '빈센트 반 고흐는 40여 점에 이르는 자화상을 남겼다. 갈색조가 주를 이루는 초기 사실주의적 자화상에서부터 인상주의적 색채와 기법을 거쳐 자신만의 개성이 돋보이는 후기작에 이르기까지 그의 자화상 양식은 많은 변화 과정을 거치게 된다.',
    },
    {
      id: 3,
      title: '방구석미술관',
      image:
        'https://mblogthumb-phinf.pstatic.net/MjAyMTA1MjFfMjg4/MDAxNjIxNTYzNjc1MDIz.uw6k_XWFzOc70YiIF0qlpVyRBUGOnRocesXkJcSSGLIg.fZzD1Jo2JnDepZVnyV10t1GAjJPmqBZ9YCzmIpHYJIYg.JPEG.mcst_pr/%EA%B3%B5%EA%B0%90-%EC%A0%95%EC%B1%85%EC%A3%BC%EA%B0%84%EC%A7%80%EA%B3%B5%EA%B0%90-%EB%8B%A4%EB%B9%88%EC%B9%98-%EB%AA%85%ED%99%94-%EB%A0%88%EC%98%A4%EB%82%98%EB%A5%B4%EB%8F%84%EB%8B%A4%EB%B9%88%EC%B9%98-%EB%AF%B8%EC%88%A0-%EC%B5%9C%ED%9B%84%EC%9D%98%EB%A7%8C%EC%B0%AC.jpg?type=w800',
      description:
        '최후의 만찬에서 빼놓을 수 없는 것은 유다가 그림 속에 다른 제자들과 동등하게 앉아있다는 사실이다.',
    },
  ];

  const nextCard = () => {
    setSwipeDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setSwipeDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleButtonClick = () => {
    alert('사진을 찍습니다!');
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <CardSliderContainer {...swipeHandlers}>
      <Card>
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
