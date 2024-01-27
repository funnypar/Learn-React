import Btn from "./Btn";

export default function Friend({ name }) {
    return (
        <div className="friend-wrapper">
            <div>
                <img src={`media/${name}.jpg`} alt="sara" />
                <h4>
                    {name} <span>You owe Sara $7</span>
                </h4>
            </div>
            <Btn classname={"btn"}>Select</Btn>
        </div>
    );
}
