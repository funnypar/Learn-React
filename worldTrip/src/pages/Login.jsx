import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import Nav from "../components/Nav";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className={styles.wrapper}>
            <Nav />
            <form>
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
                <Link to="/app">Login</Link>
            </form>
        </div>
    );
}
