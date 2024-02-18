export default function Btn({ children, onClicked, classname = "" }) {
    return (
        <button className={`list-btn ${classname}`} onClick={() => onClicked()}>
            {children}
        </button>
    );
}
