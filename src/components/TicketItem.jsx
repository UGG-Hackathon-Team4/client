import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TicketItem = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/GalleryPage", { state: { title: data.title } });
  };

  return (
    <TicketContainer onClick={handleClick}>
      <TicketBackground>
        <TicketContent>
          <TicketDate>{data.date}</TicketDate>
          <TicketTitle>{data.title}</TicketTitle>
          <TicketLocation>{data.text}</TicketLocation>
        </TicketContent>
      </TicketBackground>
    </TicketContainer>
  );
};

export default TicketItem;

const TicketContainer = styled.div`
  width: 305px;
  height: auto;


`;

const TicketBackground = styled.div`
  width: 100%;
  height: 162px;

  background: url("/public/ticket.png") no-repeat center/contain;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:20px;
`;

const TicketDate = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
`;

const TicketTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const TicketLocation = styled.div`
  font-size: 14px;
  color: #999;
`;
