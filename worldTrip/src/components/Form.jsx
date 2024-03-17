import { useNavigate } from "react-router-dom";
import Btn from "./Btn";
import styles from "./Form.module.css";

export default function Form() {
    const navigate = useNavigate();
    return (
        <form className={styles.form}>
            <div>
                <label htmlFor="city">City name</label>
                <input type="text" id="city" />
            </div>
            <div>
                <label htmlFor="date">When did you go to ?</label>
                <input type="date" id="date" />
            </div>
            <div>
                <label htmlFor="city">Notes about your trip to </label>
                <textarea id="text" cols="30" rows="3"></textarea>
            </div>
            <div>
                <Btn type="add">Add</Btn>
                <Btn
                    type="back"
                    onClicked={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                >
                    &larr; Back
                </Btn>
            </div>
        </form>
    );
}
