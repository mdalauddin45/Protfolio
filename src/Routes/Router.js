import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home";
import Blog from "../pages/Home/Blog/Blog";
import ProjectDetails from "../pages/Home/Works/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/projectdetails/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://protfolio-server-six.vercel.app/projects/${params.id}`
          ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <AboutMe /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
