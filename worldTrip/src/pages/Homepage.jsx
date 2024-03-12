import styles from "./Homepage.module.css";
import Nav from "../components/Nav";

export default function Homepage() {
    return (
        <div className={styles.wrapper}>
            <Nav />
            <div className={styles.infos}>
                <div>
                    <h1>
                        You travel the world. WorldTrip keeps track of your
                        adventures.
                    </h1>
                    <p>
                        A world map that tracks your footsteps into every city
                        you can think of . Never forget your wonderful
                        experiences, and show your friends how you have wandered
                        the world.
                    </p>
                </div>
                <button className={styles.btn}>Start tracking now</button>
            </div>
        </div>
    );
}
