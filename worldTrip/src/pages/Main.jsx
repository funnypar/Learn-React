import LeftSide from "../components/LeftSide";
import Map from "../components/Map";
import User from "../components/User";
import styles from "./Main.module.css";

export default function Main() {
    return (
        <div className={styles.main}>
            <LeftSide />
            <Map />
            <User />
        </div>
    );
}
