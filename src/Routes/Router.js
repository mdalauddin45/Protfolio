import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home";
import Blog from "../pages/Home/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <AboutMe /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
