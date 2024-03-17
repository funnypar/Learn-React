import LeftSide from "../components/LeftSide";
import Map from "../components/Map";
import styles from "./Main.module.css";

export default function Main() {
    return (
        <div className={styles.main}>
            <LeftSide />
            <Map />
        </div>
    );
}
