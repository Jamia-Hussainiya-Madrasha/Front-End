import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import AcademicDetailPage from "../pages/AcademicDetailsPage";
import Academics from "../pages/Academics";
import Admission from "../pages/Admission";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Notice from "../pages/Notice";
import NoticeDetail from "../pages/noticeDetails";
import TeachersPage from "../pages/TeachersPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/academic",
        element: <Academics />,
      },
      {
        path: "/academic/:id",
        element: <AcademicDetailPage />,
      },
      {
        path: "/teachers",
        element: <TeachersPage />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/notice/:id",
        element: <NoticeDetail />,
      },
    ],
  },
]);

export default Routes;
