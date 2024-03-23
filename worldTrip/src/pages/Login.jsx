import styles from "./Login.module.css";
import Nav from "../components/Nav";
import Btn from "../components/Btn";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const { login, isAuthLogin } = useAuth();
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        login(email, pass);
    }

    useEffect(() => {
        if (isAuthLogin) navigate("/app", { replace: true });
    }, [isAuthLogin, navigate]);

    return (
        <div className={styles.wrapper}>
            <Nav />
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        value={email}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                        id="password"
                        value={pass}
                        required
                    />
                </div>
                <Btn type="login">Login</Btn>
            </form>
        </div>
    );
}
