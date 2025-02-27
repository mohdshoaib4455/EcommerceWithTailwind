import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductPage from "./Components/ProductPage.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import SignUp from "./Components/Form/SignUp.jsx";
import { StoreProvider } from "./store/StoreContext.jsx";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <RouterProvider router={Routes} />
  </StoreProvider>
);
