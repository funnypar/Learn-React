import React from "react";
import "./app.css";

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
                <Skill skill={"HTML+CSS"} sticker={"👊"} color={"#E6C229"} />
                <Skill skill={"Javascript"} sticker={"👑"} color={"#F17105"} />
                <Skill skill={"Python"} sticker={"😍"} color={"#6610F2"} />
                <Skill skill={"LPIC"} sticker={"👻"} color={"#1A8FE3"} />
                <Skill skill={"React"} sticker={"💣"} color={"#92FF5A"} />
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

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <h4>{props.skill}</h4>
            <span>{props.sticker}</span>
        </div>
    );
}

export default App;
