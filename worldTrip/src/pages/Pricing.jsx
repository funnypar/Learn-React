import Nav from "../components/Nav";
import styles from "./Pricing.module.css";

export default function Pricing() {
    return (
        <div className={styles.wrapper}>
            <Nav />
            <div className={styles.parts}>
                <img src="/media/horizon.jpg" alt="sunset" />
                <div className={styles.infos}>
                    <h3>
                        Simple pricing
                        <br />
                        Just $9/month
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vitae vel labore mollitia iusto. Recusandae quos
                        provident, laboriosam fugit voluptatem iste.
                    </p>
                </div>
            </div>
        </div>
    );
}
