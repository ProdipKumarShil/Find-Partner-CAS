import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/profile/:userName',
        element: <Profile />
      }
    ]
  }
])

export default router