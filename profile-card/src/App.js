import React from "react";
import { ReactDOM } from "react-dom/client";
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
                <Skill />
                <Skill />
                <Skill />
                <Skill />
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

function Skill() {
    return (
        <div className="skill">
            <h4>HTMLadadasd</h4>
            <span>🤠</span>
        </div>
    );
}

export default App;
