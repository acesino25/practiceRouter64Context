import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LayoutForbidden from "../layout/LayoutForbidden";

import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/LogIn";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/dashboard',
                element: <LayoutForbidden />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />
                    }
                ]
            }
        ]
    }
])

export default router;