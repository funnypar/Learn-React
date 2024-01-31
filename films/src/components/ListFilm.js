import { useState } from "react";
import BtnFilm from "./BtnFilm";
import ListItemFilm from "./ListItemFilm";

export default function List({ database }) {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div className="list">
            <BtnFilm
                showBtn={showBtn}
                onSetShowBtn={() => setShowBtn(!showBtn)}
            />
            {!showBtn ? <ListItemFilm database={database} /> : ""}
        </div>
    );
}
