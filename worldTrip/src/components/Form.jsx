import styles from "./Form.module.css";

export default function Form() {
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
                <button>Add</button>
                <button>&larr; Back</button>
            </div>
        </form>
    );
}
