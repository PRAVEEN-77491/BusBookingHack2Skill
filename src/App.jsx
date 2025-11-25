import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SearchBuses from "./pages/SearchBuses";
import SeatSelection from "./pages/SeatSelection";
import PassengerInfo from "./pages/PassengerInfo";
import Review from "./pages/Review";
import ViewTicket from "./pages/ViewTicket";
import Layout from "./layout/Layout";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/search",
          element: <SearchBuses />,
        },
        {
          path: "/seats/:busId",
          element: <SeatSelection />,
        },
        {
          path: "/passenger-info",
          element: <PassengerInfo />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/ticket",
          element: <ViewTicket />,
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
