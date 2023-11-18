import React from "react";
import "./app.css";

const DATABASE = [
    { skill: "HTML+CSS", sticker: "👊", color: "#E6C229", id: 1 },
    { skill: "Javascript", sticker: "👑", color: "#F17105", id: 2 },
    { skill: "Python", sticker: "😍", color: "#6610F2", id: 3 },
    { skill: "LPIC", sticker: "👻", color: "#1A8FE3", id: 4 },
    { skill: "React", sticker: "💣", color: "#92FF5A", id: 5 },
];

function App() {
    return (
        <div className="container">
            <Box />
        </div>
    );
}

function Box() {
    return (
        <div className="box">
            <img src="images/huu4ko.jpg" alt="me" />
            <Infos />
            <div className="skills">
                {DATABASE.map((data) => (
                    <Skill data={data} key={data.id} />
                ))}
            </div>
        </div>
    );
}

function Infos() {
    return (
        <div className="infos">
            <h2>Mohammad Parsa Norouzi</h2>
            <p>
                front-end web developer and Deutsch teacher. When not coding, I
                like to play football, read books or listen to the podcasts.
            </p>
        </div>
    );
}

function Skill({ data }) {
    return (
        <div className="skill" style={{ backgroundColor: data.color }}>
            <h4>{data.skill}</h4>
            <span>{data.sticker}</span>
        </div>
    );
}

export default App;
