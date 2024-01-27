import { useState } from "react";

export default function Form({ onFriend }) {
    const [nameInput, setNameInput] = useState("");
    const [imgInput, setImgInput] = useState("");

    function submitHandler(event) {
        event.preventDefault();
        onFriend({ id: Math.random(), name: nameInput, img: imgInput });
    }

    return (
        <form className="friend-form" onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="friend">🦸 Friend Name </label>
                    <input
                        type="text"
                        placeholder="mopano"
                        name="friend"
                        id="friend"
                        onChange={(event) => setNameInput(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="image">📷 Image URL </label>
                    <input
                        type="text"
                        placeholder="http://image.jpg"
                        name="image"
                        id="image"
                        onChange={(event) => setImgInput(event.target.value)}
                    />
                </div>
            </div>
            <button type="submit" className={"btn"}>
                Add
            </button>
        </form>
    );
}
