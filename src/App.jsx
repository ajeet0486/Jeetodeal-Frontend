import {createBrowserRouter} from "react-router-dom"
import Home from "./Components/Home";
import Order from "./Components/Order";


const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/order",
    element: <Order/>,

  },
]);


export default App;
