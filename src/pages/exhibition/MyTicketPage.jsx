import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TicketItem from "../../components/TicketItem";

const MyTicketPage = () => {
  const data = {
    title:"반 고흐 빛의 시어터",
    text:"더 트리니티 갤러리",
    date:"2024.12.28"
  }
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/QRScanPage");
  };

  return (
    <MainContainer>
      <Header>
      <HeaderText>나의 티켓</HeaderText>  
      </Header>

      <TicketPreview>
        <PreviewBox onClick={handleClick}/>
      </TicketPreview>

      <TicketList>
        {[data, data, data].map((data, index) => (
          <TicketItem data={data} key={index} />
        ))}
      </TicketList>


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

export default MyTicketPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-top:20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  margin-bottom: 20px;
  margin-left:50px;
  width:100%;
`;

const HeaderText = styled.h1`
font-size: 24px;
  color: #333;
`


const TicketPreview = styled.div`
 
 width: 305px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PreviewBox = styled.div`
  width: 332px;
  height: 150px;
  background: url("/public/grayTicket.png") no-repeat center/contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


const TicketList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 5px;
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
