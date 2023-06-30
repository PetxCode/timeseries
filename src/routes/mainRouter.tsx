import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import InputScreen from "../pages/InputScreen"
import DisplayData from "../pages/DisplayData"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <InputScreen />
            },
            {
                path: "/display",
                element: <DisplayData />
            }
        ]
    }
])