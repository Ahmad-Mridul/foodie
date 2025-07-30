import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"
import Home from "./pages/Home/Home";
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         children:[
//             {
//                 index:true,
//                 element:<Home/>
//             }
//         ]
//     },
// ]);
createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
);
