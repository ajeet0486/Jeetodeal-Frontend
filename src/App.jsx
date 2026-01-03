import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "./Components/Home";
import Order from "./Components/Order";
import Upi from "./Components/Upi";
import Team from "./Components/Team";
import My from "./Components/My";
import YouTube from "./Components/YouTube";
import Enjoy from "./Components/Enjoy";
import MobiKwik from "./Components/PaymentsGate/MobiKwik";
import Check from "./Components/Check";
import AmazonPay from "./Components/PaymentsGate/AmazonPay";
import FreeCharge from "./Components/PaymentsGate/FreeCharge";


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
    element: <Upi />,

  },
  {
    path: "/team",
    element: <Team />,

  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/youtube",
    element: <YouTube />,
  },
  {
    path: "/enjoy",
    element: <Enjoy />,
  },
  {
    path: "/mobikwik",
    element: <MobiKwik />,
  },
  {
    path: "/amazonpay",
    element: <AmazonPay />,
  },
  {
    path: "/freecharge",
    element: <FreeCharge/>,
  },
  {
    path: "/check",
    element: <Check />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  },
]);


export default App;
