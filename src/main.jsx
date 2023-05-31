import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layouts from "./Layouts/Layouts";
import ErrorPage from "./pages/ErrorPage";
import Home from "./outlets/Home";
import AddChoco from "./pages/AddChoco";
import UpdateChoco from "./pages/UpdateChoco";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://chocolate-management-server-code.up.railway.app/chocolate"
          ),
      },
      {
        path: "add_choco",
        element: <AddChoco />,
      },
      {
        path: "update_choco/:id",
        element: <UpdateChoco />,
        loader: ({ params }) =>
          fetch(
            `https://chocolate-management-server-code.up.railway.app/chocolate/${params.id}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
