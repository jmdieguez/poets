import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SelectedAuthorProvider } from "./authorContext";
import PoemPage from "./components/Poem";
import PoetryApp from "./components/PoetryApp";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <PoetryApp />
      </Layout>
    ),
  },
  {
    path: "poem/:title",
    element: <PoemPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SelectedAuthorProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </SelectedAuthorProvider>
  </React.StrictMode>
);
