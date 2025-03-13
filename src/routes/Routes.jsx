import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About";
import AcademicDetail from "../pages/academicDetails";
import Academics from "../pages/Academics";
import Admission from "../pages/Admission";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import Notice from "../pages/Notice";
import NoticeDetail from "../pages/noticeDetails";
import Teachers from "../pages/Teachers";
import PhotoGallary from "../pages/photoGallary";
import VideoGallary from "../pages/VideoGallary";
import BookIntroduction from "../pages/BookIntroduction";

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
        element: <AcademicDetail />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
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