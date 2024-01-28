import Friend from "./Friend";
import Btn from "./Btn";
import Form from "./Form";
import { useState } from "react";

export default function Friends({ onBill, showOwe, onNewPerson, database }) {
    const [addFriend, setAddFriend] = useState(false);

    return (
        <div className={`wrapper ${showOwe ? "active" : ""}`}>
            {database.map((person) => {
                return (
                    <Friend
                        name={person.name}
                        image={person.img}
                        onOwe={() => onBill(person)}
                        balance={person.balance}
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
            {addFriend ? <Form onFriend={(datas) => onNewPerson(datas)} /> : ""}
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
