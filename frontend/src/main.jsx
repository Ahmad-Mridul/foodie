import { createRoot } from "react-dom/client";
import "./index.css";
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/shop",
                element: (
                    <PrivateRoute>
                        <Shop />
                    </PrivateRoute>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <SignUp />,
    },
]);
createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
    </AuthProvider>
);
