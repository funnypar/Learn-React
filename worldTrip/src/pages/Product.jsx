import Nav from "../components/Nav";
import styles from "./Product.module.css";

export default function Product() {
    return (
        <div className={styles.wrapper}>
            <Nav />
            <div className={styles.parts}>
                <img src="/media/sunset.jpg" alt="sunset" />
                <div className={styles.infos}>
                    <h3>About Worldtrip</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo est dicta illum vero culpa cum quaerat architecto
                        sapiente eius non soluta, molestiae nihil laborum,
                        placeat debitis, laboriosam at fuga perspiciatis?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corporis doloribus libero sunt expedita ratione
                        iusto, magni, id sapiente sequi officiis et.
                    </p>
                </div>
            </div>
        </div>
    );
}
