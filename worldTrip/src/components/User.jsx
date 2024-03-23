import styles from "./User.module.css";
import Btn from "./Btn";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function User() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <img src={user.avatar} alt={user.name} />
            <p>Welcome, {user.name}</p>
            <Btn
                type="logout"
                onClicked={() => {
                    logout();
                    navigate("/");
                }}
            >
                Logout
            </Btn>
        </div>
    );
}
