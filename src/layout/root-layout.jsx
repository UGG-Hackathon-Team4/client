import { Outlet } from "react-router-dom";
import styled from "styled-components";

const RootLayout = () => {
    return (
      <>
        <Header>App Header</Header>
        <MainContent>
          <ContentWrapper>
            <Outlet />
          </ContentWrapper>
        </MainContent>
        <Footer>
          <a href="/">Home</a>
          <a href="/">Profile</a>
          <a href="/">Settings</a>
        </Footer>
      </>
    );
  };




const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8f9fa;
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`;

const Header = styled.header`
  height: 60px;
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Footer = styled.footer`
  height: 60px;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;

  & a {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 60px; 
  margin-bottom: 60px; 
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;



export default RootLayout;
