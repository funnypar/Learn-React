export default function Item({ name, year, poster, onClicked }) {
    return (
        <>
            <div className="item-wrapper" onClick={() => onClicked()}>
                <img src={poster} alt={name} />
                <div>
                    <p className="name">{name}</p>
                    <p className="year">🗓 {year}</p>
                </div>
            </div>
            <hr />
        </>
    );
}
