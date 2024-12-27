import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const PhotoItem = ({title})=>{
    const navigate = useNavigate();
    const handleClick = ()=>{
      navigate('/DetailPage')
    }
    return(
        <MainConatainer onClick={handleClick}>
            <Thumbnail />
            <PhotoDetails>
              <PhotoTitle>{title}</PhotoTitle>
              <PhotoDescription>
               설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
              </PhotoDescription>
            </PhotoDetails>
          </MainConatainer>
    )
}

export default PhotoItem;


const MainConatainer = styled.div`
  display: flex;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ccc;
  border-radius: 8px;
  margin-right: 15px;
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