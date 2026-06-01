import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.tsx";
import Design1 from "./designs/design1.tsx";
import Design2 from "./designs/design2.tsx";
import Design3 from "./designs/design3.tsx";
import Design4 from "./designs/design4.tsx";
import Design5 from "./designs/design5.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Design1 /> },
      { path: "1", element: <Design1 /> },
      { path: "2", element: <Design2 /> },
      { path: "3", element: <Design3 /> },
      { path: "4", element: <Design4 /> },
      { path: "5", element: <Design5 /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);