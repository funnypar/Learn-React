import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner";

function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
    }).format(value);
}

function BalanceDisplay() {
    const balance = useSelector((state) => state.account.balance);
    const isLoading = useSelector((state) => state.account.isLoading);

    return (
        <div className="balance">
            {isLoading ? <Spinner /> : formatCurrency(balance)}
        </div>
    );
}

export default BalanceDisplay;
