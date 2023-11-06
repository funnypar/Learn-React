import React from "react";
import { ReactDOM } from "react-dom/client";

function App() {
    return <Box />;
}

function Box() {
    return (
        <div>
            <img src="images/huu4ko.jpg" alt="me" />
            <Infos />
        </div>
    );
}

function Infos() {
    return (
        <div>
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
        <div>
            <h4>blabla</h4>
            <span>sticker</span>
        </div>
    );
}

export default App;
