export default function Item({ name, year, poster }) {
    return (
        <div>
            <div className="item-wrapper">
                <img src={poster} alt={name} />
                <div>
                    <p className="name">{name}</p>
                    <p className="year">🗓 {year}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}
