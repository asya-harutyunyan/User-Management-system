import { useRoutes } from "react-router-dom";
import UserDetailsPage from "./pages/UserDetailsPage";
import HomePage from "./pages/HomePage";
import ManagementSystem from "./pages/ManagementSystem";

const RoutesPage = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "/users", element: <ManagementSystem /> },
    { path: "/users/:id", element: <UserDetailsPage /> },
    {
      path: "*",
      element: (
        <h1 style={{ fontSize: "40px", color: "red", marginTop: "15px" }}>
          Page Not Found
        </h1>
      ),
    },
  ]);
};

export default RoutesPage;
