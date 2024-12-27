import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import RootLayout from "./layout/root-layout";

import MyTicketPage from './pages/exhibition/MyTicketPage';
import MainPage from './pages/MainPage';
import QRScanPage from './pages/search/QRScanPage';
//라우터
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: '/MyTicketPage',
        element: <MyTicketPage/>
      },
      {
        path: '/QRScanPage',
        element: <QRScanPage/>
      },
    ]
  },

])


function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
