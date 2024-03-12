import styles from "./Login.module.css";
import Nav from "../components/Nav";

export default function Login() {
    return (
        <div className={styles.wrapper}>
            <Nav />
            <form>
                <div>
                    <label>Email :</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
