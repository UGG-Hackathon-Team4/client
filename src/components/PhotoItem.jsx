import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PhotoItem = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/DetailPage',{ state: { title: data.title,text:data.text } });
  };

  return (
    <MainContainer onClick={handleClick}>
      <Thumbnail />
      <PhotoDetails>
        <PhotoTitle>{data.title}</PhotoTitle>
        <PhotoDescription>
          {data.text}
        </PhotoDescription>
      </PhotoDetails>
    </MainContainer>
  );
};

export default PhotoItem;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 100px auto; 
  gap: 15px; 
  align-items: center; 
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 8px;
`;

const PhotoDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhotoTitle = styled.h3`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const PhotoDescription = styled.p`
  font-size: 14px;
  color: #666;
`;
