import "./App.css";
import Item from "./components/Item";

const DATABASE = [
    {
        id: "1e",
        question: "What is React ?",
        answer: "React is a JavaScript library created by Facebook React is a User Interface (UI) library React is a tool for building UI components",
    },
    {
        id: "2e",
        question: "What is Javascript ?",
        answer: "JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.",
    },
    {
        id: "3e",
        question: "What is Front-End development ?",
        answer: "That is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.",
    },
];

function App() {
    return (
        <div className="App">
            {DATABASE.map((data) => (
                <Item datas={data} />
            ))}
        </div>
    );
}

export default App;
