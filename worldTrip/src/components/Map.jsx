import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.map}>
            <h1>
                {lat}, {lng}
            </h1>
        </div>
    );
}
