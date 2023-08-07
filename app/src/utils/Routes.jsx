
import { getToken, getUserId } from "./auth";
import Home from "../component/homepage/Home";
import AdminLayout from "./AdminLayout";
// import Maindashboard from "../component/DashboardPage/Dashboard";
import Mainpagedash from "../component/DashboardPage/sideNavOption/Dashboard";
import Allproducts from "../component/DashboardPage/sideNavOption/Allproducts";
import StockFile from "../component/DashboardPage/sideNavOption/Stocks/Addstock";
import Alllocation from "../component/DashboardPage/sideNavOption/Stocks/Alllocations";
import Subscribeuser from "../component/DashboardPage/sideNavOption/Newsletter/Subscriber";

const role = getUserId() ? getUserId()?.userRole : null;
const isLoggedIn = getToken();
const protects = {
    default: [
        {
            path: "/",
            element: <AdminLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/dashboard", element: <Mainpagedash /> },
                { path: "/allproduct", element: <Allproducts /> },
                { path: "/Addstock", element: <StockFile /> },
                { path: "/Allloation", element: <Alllocation /> },
                { path: "/Subscriber", element: <Subscribeuser /> },
                { path: "*", element: "NO PAGE FOUND" },
            ],
        },
    ],
};

export const protect =
    role && isLoggedIn ? protects[role] : protects["default"];
export const defaultProtect = protects["default"];
