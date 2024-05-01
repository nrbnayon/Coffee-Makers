import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Components/Coffee/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffe",
        element: <Home />,
      },
    ],
  },
]);

export default router;
