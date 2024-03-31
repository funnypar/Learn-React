import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
    const navigtion = useNavigation();
    const isLoading = navigtion.state === "loading";

    return (
        <div className="layout">
            <Header />

            <main>{isLoading ? <Loader /> : <Outlet />}</main>

            <CartOverview />
        </div>
    );
};

export default AppLayout;
