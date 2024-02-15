import { useState } from "react";
import BtnFilm from "./BtnFilm";
import ListItemFilm from "./ListItemFilm";
import Loader from "./Loader";
import ErrorMassage from "./ErrorMassage";

export default function List({ database, load, error }) {
    const [showBtn, setShowBtn] = useState(false);
    console.log(error);

    return (
        <div className="list">
            <BtnFilm
                showBtn={showBtn}
                onSetShowBtn={() => setShowBtn(!showBtn)}
            />
            {!showBtn && !load ? <ListItemFilm database={database} /> : ""}
            {error !== "" ? <ErrorMassage err={error} /> : ""}
            {load && error === "" ? <Loader /> : ""}
        </div>
    );
}
