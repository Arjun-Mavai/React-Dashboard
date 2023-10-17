// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BoardPage from "./pages/Board/Board";
import Calendar from "./pages/Calendar/Calendar";
import Dashboard from "./pages/Dashboard/Dashboard";
import DataGrid from "./pages/DataGrid/DataGrid";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "calendar",
          element: <Calendar />,
        },
        {
          path: "board",
          element: <BoardPage />,
        },
        {
          path: "users",
          element: <DataGrid />,
        },
      ],
    },
  ]);
  return (
    <div id="dashboard">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
