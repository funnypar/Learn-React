import Btn from "./Btn";
import Item from "./Item";

export default function List({ database }) {
    return (
        <div className="list">
            <Btn>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 12h14"
                    />
                </svg>
            </Btn>
            {database.map((el) => {
                return (
                    <Item
                        name={el.Title}
                        year={el.Year}
                        poster={el.Poster}
                        key={el.imbdID}
                    />
                );
            })}
        </div>
    );
}
