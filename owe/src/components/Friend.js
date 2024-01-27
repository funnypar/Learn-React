export default function Friend({ name, image, onOwe }) {
    return (
        <div className="friend-wrapper">
            <div>
                <img src={`${image}`} alt="sara" />
                <h4>
                    {name} <span>You owe Sara $7</span>
                </h4>
            </div>
            <button className={"btn"} onClick={() => onOwe()}>
                Select
            </button>
        </div>
    );
}
