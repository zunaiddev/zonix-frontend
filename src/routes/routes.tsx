import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layouts/RootLayout.tsx";
import PublicLayout from "../layouts/PublicLayout.tsx";
import Home from "../pages/Home.tsx";
import Test from "../pages/Test.tsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <PublicLayout/>,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    }
                ]
            }
        ],
    },
    {
        path: "/test",
        element: <Test/>
    }
]);

export default routes;