import Friend from "./Friend";
import Btn from "./Btn";
import Form from "./Form";
import { useState } from "react";

export default function Friends({ onBill, showOwe }) {
    const [DATABASE, setDATABASE] = useState([
        { id: "1p", name: "sara", img: "media/sara.jpg" },
        { id: "2p", name: "morgen", img: "media/morgen.jpg" },
        { id: "3p", name: "nika", img: "media/nika.jpg" },
    ]);
    const [addFriend, setAddFriend] = useState(false);

    function friendHandler(data) {
        setDATABASE((database) => [...database, data]);
    }

    return (
        <div className={`wrapper ${showOwe ? "active" : ""}`}>
            {DATABASE.map((person, index) => {
                return (
                    <Friend
                        name={person.name}
                        image={person.img}
                        onOwe={() => onBill(person)}
                        key={person.id}
                    />
                );
            })}
            {!addFriend ? (
                <Btn
                    classname={"btn-add btn"}
                    onClicked={() => setAddFriend(!addFriend)}
                >
                    Add Friend
                </Btn>
            ) : (
                ""
            )}
            {addFriend ? <Form onFriend={friendHandler} /> : ""}
            {addFriend ? (
                <Btn
                    classname={"btn-close btn"}
                    onClicked={() => setAddFriend(!addFriend)}
                >
                    Close
                </Btn>
            ) : (
                ""
            )}
        </div>
    );
}
