import styled from "styled-components";
import TicketItem from "../../components/TicketItem";

const MyTicketPage = () => {
  return (
    <MainContainer>
      <Header>나의 티켓</Header>
      <TicketPreview>
        <PreviewBox>QR 확인</PreviewBox>
        <TicketModel>티켓 모양</TicketModel>
      </TicketPreview>
      <TicketList>
        {[1, 2, 3].map((ticket, index) => (
          <TicketItem ticket = {ticket} key={index} />
        ))}
      </TicketList>
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

export default MyTicketPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const TicketPreview = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-align: center;
`;

const PreviewBox = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const TicketModel = styled.div`
  font-size: 16px;
  color: #666;
`;

const TicketList = styled.div`
  width: 100%;
  max-width: 400px;
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
