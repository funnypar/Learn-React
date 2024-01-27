export default function Btn({ children, classname, onClicked }) {
    function addFriendHandler() {
        onClicked(true);
    }

    return (
        <button className={`${classname}`} onClick={addFriendHandler}>
            {children}
        </button>
    );
}
