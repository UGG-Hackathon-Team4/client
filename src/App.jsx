import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import RootLayout from "./layout/root-layout";

import MyTicketPage from './pages/exhibition/MyTicketPage';
import MainPage from './pages/MainPage';
import QRScanPage from './pages/search/QRScanPage';
import QRGenerator from './pages/search/QRGenerator.jsx';

import GalleryPage from "./pages/exhibition/GalleryPage.jsx";
import SearchPhotoPage from './pages/search/SearchPhotoPage';
import DetailPage from './pages/exhibition/DetailPage';
import QRDataPage from './pages/search/QRDataPage';
import ReviewPage from "./pages/search/ReviewPage.jsx";
import NoPhotoPage from './pages/search/NoPhotoPage';
import CardSlider from './pages/search/CardSlider';
// 라우터 설정
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
      {
        path: '/QRGenerator',
        element: <QRGenerator/>
      },
      {
        path: '/GalleryPage',
        element: <GalleryPage/>
      },
      {
        path: '/SearchPhotoPage',
        element: <SearchPhotoPage/>
      },
      {
        path: '/DetailPage',
        element: <DetailPage/>
      },
      {
        path: '/QRDataPage',
        element: <QRDataPage/>
      },
      {
        path: '/ReviewPage',
        element: <ReviewPage/>
      },
      {
        path: '/NoPhotoPage',
        element: <NoPhotoPage/>
      },
      {
        path: '/CardSlider',
        element: <CardSlider/>
      }


      
    ]
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
