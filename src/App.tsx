import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signin from "./pages/signin";
import Reorderitems from "./pages/reorderitems";
import Cart from "./pages/cart";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home /> ,
  },
 
  {
    path: "/signin",
    element:<Signin /> ,
  },
  {
    path: "/reorderitems",
    element: <Reorderitems/>,
  },
  {
    path: "/carts",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
