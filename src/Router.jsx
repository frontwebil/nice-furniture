import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { KithcenPage } from "./pages/KithcenPage";
import { MainPage } from "./pages/mainPage";

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
