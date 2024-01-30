export default function Btn({ children, onClicked }) {
    return (
        <button className="list-btn" onClick={() => onClicked()}>
            {children}
        </button>
    );
}
