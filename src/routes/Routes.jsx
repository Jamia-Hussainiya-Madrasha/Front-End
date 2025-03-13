import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import AcademicDetailPage from "../pages/AcademicDetailsPage";
import Academics from "../pages/Academics";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
<<<<<<< HEAD
import Notice from "../pages/Notice";
import NoticeDetail from "../pages/noticeDetails";
import Teachers from "../pages/Teachers";
import PhotoGallary from "../pages/photoGallary";
import VideoGallary from "../pages/VideoGallary";
<<<<<<< HEAD
=======
import BookIntroduction from "../pages/BookIntroduction";
>>>>>>> 37bd479decb94cf4d3be69f740aff27b1f3cb963
=======
import NoticePage from "../pages/NoticePage";
import NoticeDetailsPage from "../pages/NoticeDetailsPage";
import TeachersPage from "../pages/TeachersPage";
import AdmissionPage from "../pages/AdmissionPage";
>>>>>>> afc1f491e8bef5d0fbe7a58ed8bae86080fe83c2

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
        element: <NoticeDetailsPage />,
      },
      {
        path: "/photoGallary",
        element: <PhotoGallary />,
      },
      {
        path: "/VideoGallary",
        element: <VideoGallary />,
      },
      {
        path: "/bookIntroduction",
        element: <BookIntroduction />,
      },
    ],
  },
]);

export default Routes;
