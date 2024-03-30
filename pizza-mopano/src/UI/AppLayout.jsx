import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

const AppLayout = () => {
    const navigtion = useNavigation();
    const isLoading = navigtion.state === "loading";
    return (
        <div className="layout">
            {!isLoading ? (
                <>
                    <Header />

                    <main>
                        <Outlet />
                    </main>

                    <CartOverview />
                </>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default AppLayout;
