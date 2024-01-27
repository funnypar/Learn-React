import Btn from "./Btn";

export default function Form() {
    return (
        <form className="friend-form">
            <div>
                <div>
                    <label htmlFor="friend">🦸 Friend Name </label>
                    <input
                        type="text"
                        placeholder="mopano"
                        name="friend"
                        id="friend"
                    />
                </div>
                <div>
                    <label htmlFor="image">📷 Image URL </label>
                    <input
                        type="text"
                        placeholder="http://image.jpg"
                        name="image"
                        id="image"
                    />
                </div>
            </div>
            <Btn classname={"btn"}>Add</Btn>
        </form>
    );
}
