import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const RootLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 숨기고 싶은 페이지 설정
  const hideHeaderPaths = ["/", "/MyTicketPage"];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <MainContainer>
      {!shouldHideHeader && (
        <Header>
          <BackButton onClick={() => navigate(-1)}>&lt;</BackButton> 
        </Header>
      )}
      <ContentWrapper shouldHideHeader={shouldHideHeader}>
        <Outlet />
      </ContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Header = styled.header`
  height: 60px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 24px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  margin-top: ${({ shouldHideHeader }) => (shouldHideHeader ? "0" : "60px")}; /* Header가 없으면 margin-top 제거 */
  flex: 1;
  overflow-y: auto; /* 콘텐츠가 길 경우 스크롤 가능 */
  padding-top: 20px; /* 내부 콘텐츠에 간격 추가 */
`;

export default RootLayout;
