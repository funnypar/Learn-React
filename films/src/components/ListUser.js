import { useState } from "react";
import BtnUser from "./BtnUser";
import ListItemUser from "./ListItemUser";
import UserControl from "./UserControl";
import SelectedItem from "./SelectedItem";
import Btn from "./Btn";

export default function ListUser({
    database,
    selected,
    onClicked,
    onDeleted,
    onWatch,
}) {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div className="list">
            {!selected ? (
                <>
                    <BtnUser
                        showBtn={showBtn}
                        onSetShowBtn={() => setShowBtn(!showBtn)}
                    />
                    {!showBtn ? <UserControl database={database} /> : ""}
                    {!showBtn ? (
                        <ListItemUser
                            database={database}
                            onDeleted={(id) => onDeleted(id)}
                        />
                    ) : (
                        ""
                    )}
                </>
            ) : (
                <>
                    <Btn classname="prev" onClicked={() => onClicked()}>
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
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                    </Btn>
                    <SelectedItem
                        database={database}
                        id={selected}
                        onWatch={(data) => onWatch(data)}
                        onClicked={() => onClicked()}
                    />
                </>
            )}
        </div>
    );
}
