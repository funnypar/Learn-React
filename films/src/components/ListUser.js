import { useState } from "react";
import BtnUser from "./BtnUser";
import ListItemUser from "./ListItemUser";
import UserControl from "./UserControl";

export default function ListUser({ database }) {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div className="list">
            <BtnUser
                showBtn={showBtn}
                onSetShowBtn={() => setShowBtn(!showBtn)}
            />
            {!showBtn ? <UserControl database={database} /> : ""}
            {!showBtn ? <ListItemUser database={database} /> : ""}
        </div>
    );
}
