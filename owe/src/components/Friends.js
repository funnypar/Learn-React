import Friend from "./Friend";
import Btn from "./Btn";
import Form from "./Form";

let DATABASE = [
    { id: "1p", name: "sara" },
    { id: "2p", name: "morgen" },
    { id: "3p", name: "nika" },
];

export default function Friends() {
    return (
        <div className="wrapper">
            {DATABASE.map((person) => {
                return <Friend name={person.name} key={person.id} />;
            })}
            <Btn classname={"btn-add btn"}>Add Friend</Btn>
            <Form />
            <Btn classname={"btn-close btn"}>Close</Btn>
        </div>
    );
}
