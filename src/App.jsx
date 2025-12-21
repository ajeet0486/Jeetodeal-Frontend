import { createBrowserRouter,Navigate } from "react-router-dom"
import Home from "./Components/Home";
import Order from "./Components/Order";
import Upi from "./Components/Upi";
import Team from "./Components/Team";
import My from "./Components/My";


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
    path: "/upi",
    element: <Upi/>,

  },
  {
    path: "/team",
    element: <Team/>,

  },
  {
    path: "/my",
    element: <My/>,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  },
]);


export default App;
