
import { getToken, getUserId } from "./auth";
import Home from "../component/homepage/Home";
import AdminLayout from "./AdminLayout";
import Maindashboard from "../component/DashboardPage/Dashboard";

const role = getUserId() ? getUserId()?.userRole : null;
const isLoggedIn = getToken();
const protects = {
    default: [
        {
            path: "/",
            element: <AdminLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/dashboard", element: <Maindashboard /> },
                { path: "*", element: "NO PAGE FOUND" },
            ],
        },
    ],
};

export const protect =
    role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
