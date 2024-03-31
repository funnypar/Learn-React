import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./UI/AppLayout";
import Home from "./UI/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
    action as orderAction,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import Error from "./UI/Error";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
                errorElement: <Error />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order/new",
                element: <CreateOrder />,
                errorElement: <Error />,
                action: orderAction,
            },
            {
                path: "/order/:orderId",
                element: <Order />,
                loader: orderLoader,
                errorElement: <Error />,
            },
        ],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
