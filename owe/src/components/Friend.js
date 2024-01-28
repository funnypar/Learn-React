export default function Friend({ name, image, onOwe, balance }) {
    let content = "";

    if (balance < 0) {
        content = (
            <span
                style={{ color: "red" }}
            >{`You owe ${name} ${-balance}$`}</span>
        );
    } else if (balance > 0) {
        content = (
            <span
                style={{ color: "#0c9900" }}
            >{`${name} owes you ${balance}$`}</span>
        );
    } else {
        content = (
            <span style={{ color: "black" }}>{`You and ${name} are even`}</span>
        );
    }

    return (
        <div className="friend-wrapper">
            <div>
                <img src={`${image}`} alt="sara" />
                <h4>
                    {name} {content}
                </h4>
            </div>
            <button className={"btn"} onClick={() => onOwe()}>
                Select
            </button>
        </div>
    );
}
