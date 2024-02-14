import { useState } from "react";
import BtnFilm from "./BtnFilm";
import ListItemFilm from "./ListItemFilm";
import Loader from "./Loader";

export default function List({ database, load }) {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div className="list">
            <BtnFilm
                showBtn={showBtn}
                onSetShowBtn={() => setShowBtn(!showBtn)}
            />
            {!showBtn && !load ? <ListItemFilm database={database} /> : ""}
            {load ? <Loader /> : ""}
        </div>
    );
}
