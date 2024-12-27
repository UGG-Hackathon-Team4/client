import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PhotoItem = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/DetailPage', { state: { item: data } }); // 클릭한 아이템 데이터를 전달
  };

  return (
    <ItemContainer onClick={handleClick}>
      <Image src={data.imageUrl} alt={data.title} />
      <TextContainer>
        <Title>{data.title}</Title>
        <Text>{data.text}</Text>
      </TextContainer>
    </ItemContainer>
  );
};

export default PhotoItem;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  gap: 20px;
  cursor: pointer; /* 클릭 가능한 스타일 */
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 5px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const Text = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  line-height: 1.5;
`;
