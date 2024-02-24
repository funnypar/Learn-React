import ItemUser from "./ItemUser";

export default function ListItemUser({ database, onDeleted }) {
    return database.map((el) => {
        return (
            <ItemUser
                name={el.Title}
                poster={el.Poster}
                userRating={el.userRating}
                imdbRating={el.imdbRating}
                time={el.Runtime}
                key={el.imdbID}
                onDeleted={() => onDeleted(el.imdbID)}
            />
        );
    });
}
