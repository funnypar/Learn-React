export default function ItemUser({
    name,
    poster,
    userRating,
    imdbRating,
    time,
    onDeleted,
}) {
    return (
        <>
            <div className="UserItem-wrapper">
                <img src={poster} alt={name} />
                <div>
                    <p className="name">{name}</p>
                    <ul>
                        <li className="year">⭐️ {userRating}</li>
                        <li className="year">🌟 {imdbRating}</li>
                        <li className="year">⏳ {time}</li>
                    </ul>
                </div>
                <button onClick={() => onDeleted()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <hr />
        </>
    );
}
