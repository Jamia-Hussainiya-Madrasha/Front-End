import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import AcademicDetailPage from "../pages/AcademicDetailsPage";
import Academics from "../pages/Academics";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import NoticePage from "../pages/NoticePage";
import NoticeDetail from "../pages/noticeDetails";
import TeachersPage from "../pages/TeachersPage";
import AdmissionPage from "../pages/AdmissionPage";

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
        element: <AdmissionPage />,
      },
      {
        path: "/notice",
        element: <NoticePage />,
      },
      {
        path: "/notice/:id",
        element: <NoticeDetail />,
      },
    ],
  },
]);

export default Routes;
