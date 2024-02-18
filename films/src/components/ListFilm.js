import { useState } from "react";
import BtnFilm from "./BtnFilm";
import ListItemFilm from "./ListItemFilm";
import Loader from "./Loader";
import ErrorMassage from "./ErrorMassage";

export default function List({ database, load, error, onSelected }) {
    const [showBtn, setShowBtn] = useState(false);
    return (
        <div className="list">
            <BtnFilm
                showBtn={showBtn}
                onSetShowBtn={() => setShowBtn(!showBtn)}
            />
            {!showBtn && !load ? (
                <ListItemFilm
                    database={database}
                    onSelected={(id) => onSelected(id)}
                />
            ) : (
                ""
            )}
            {error !== "" && database.length === 0 ? (
                <ErrorMassage err={error} />
            ) : (
                ""
            )}
            {load && error === "" ? <Loader /> : ""}
        </div>
    );
}
