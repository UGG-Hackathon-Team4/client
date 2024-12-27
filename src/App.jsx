import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from './pages/MainPage';
import LoginPage from "./pages/LoginPage";
import RootLayout from "./layout/root-layout";
import './App.css';


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
        path: '/login',
        element: <LoginPage/>
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
