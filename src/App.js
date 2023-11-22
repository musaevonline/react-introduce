import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import { Box } from "@mui/material";
import { Layout } from "./components/Layout";
import CartPage from "./pages/Cart";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CatalogPage />,
      },
      {
        path: "/cart",
        element: <CartPage />
      },
    ]
  }
]);

function App() {


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
