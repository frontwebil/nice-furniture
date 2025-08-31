import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainPage from "./pages/mainPage";
import { KithcenPage } from "./pages/KithcenPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/kitchen/:id",
        element: <KithcenPage />,
      },
      ],
  },
]);
