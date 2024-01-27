import Friend from "./Friend";
import Btn from "./Btn";
import Form from "./Form";
import { useState } from "react";

let DATABASE = [
    { id: "1p", name: "sara" },
    { id: "2p", name: "morgen" },
    { id: "3p", name: "nika" },
];

export default function Friends() {
    const [addFriend, setAddFriend] = useState(false);

    return (
        <div className="wrapper">
            {DATABASE.map((person) => {
                return <Friend name={person.name} key={person.id} />;
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
            {addFriend ? <Form /> : ""}
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
