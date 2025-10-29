import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage.jsx";


const routes = [
   {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // handles errors for the entire route tree
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
  
    //  ':id' segment allows $ for dynamic URLs 
    path: "/movie/:id", 
    element: <Movie />,
  },
  {
    path: "*",
    element: <ErrorPage />
  }
  ];

export default routes;