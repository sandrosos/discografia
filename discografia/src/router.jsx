import {Routes, createBrowserRouter} from "react-router-dom";
import Album from "./views/Album";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Album />
            },
            {
                path: '/Album',
                element: <Album />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;