import styled from "styled-components";

const TicketItem = ({ticket}) => {

    return (
      <Container>
        <TicketInfo>
          <InfoRow>
            <Label>전시명{ticket}</Label>
            <Value>작가명</Value>
          </InfoRow>
          <InfoRow>
            <Label>QR 받은 날짜</Label>
            <Value>전시 장소</Value>
          </InfoRow>
        </TicketInfo>
      </Container>
    );
  };
  

export default TicketItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const Value = styled.span`
  font-size: 14px;
  color: #666;
`;
