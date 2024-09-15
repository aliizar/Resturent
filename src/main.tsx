import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.tsx";
import Home from "./Pages/Home.tsx";
import store from "./Store/store.tsx";
import DisplayCard from "./Components/DisplayCard.tsx";
import CounterLayout from "./Components/CounterLayout.tsx";
import Counter from "./Components/Counter.tsx";
import HotelsData from "./Components/HotelsData.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/DisplayCard/:id",
        element: <DisplayCard />,
      },
      
    ],
  },
  {
    path: "/card",
    element: <CounterLayout />,
    children: [
      {
        path: "/card",
        element: <Counter />,
      },
      {
        path: "/card/Hotels",
        element: <HotelsData />,
      },
      {
        path: "/card/:productid",
        element: <Counter />,
      },
      
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
