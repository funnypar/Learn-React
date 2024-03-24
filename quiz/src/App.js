import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Ready from "./components/Ready";
import Error from "./components/Error";
import Questions from "./components/Questions";
import Finish from "./components/Finish";
import { useQuiz } from "./contexts/QuizProvider";

function App() {
    const { status } = useQuiz();
    return (
        <div className="App">
            <Header />
            {status === "loading" && <Loader />}
            {status === "ok" && <Ready />}
            {status === "error" && <Error />}
            {status === "start" && <Questions />}
            {status === "finish" && <Finish />}
        </div>
    );
}

export default App;
