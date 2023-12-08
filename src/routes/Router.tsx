import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../HomePage";
import Projects from "../components/Projects";
import SkillsPage from "../pages/SkillsPage";
import AboutMe from "../pages/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutMe /> },
      { path: "projects", element: <Projects /> },
      { path: "skills", element: <SkillsPage /> },
    ],
  },
]);

export default router;
