import { createBrowserRouter,Navigate } from "react-router-dom"
import Home from "./Components/Home";
import Order from "./Components/Order";


const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/order",
    element: <Order />,

  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  },
]);


export default App;
