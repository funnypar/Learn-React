import styles from "./Homepage.module.css";
import Nav from "../components/Nav";
export default function Homepage() {
    return (
        <div className={styles.wrapper}>
            <Nav />
        </div>
    );
}
