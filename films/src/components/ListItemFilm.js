import Item from "./Item";

export default function ListItemFilm({ database, onSelected }) {
    return database.map((el) => {
        return (
            <Item
                name={el.Title}
                year={el.Year}
                poster={el.Poster}
                key={el.imdbID}
                onClicked={() => onSelected(el.imdbID)}
            />
        );
    });
}
