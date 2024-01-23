import { useState } from "react";
import Bill from "./Bill";
import Idea from "./Idea";

export default function Form() {
    const [value, setValue] = useState("");
    const [firstIdea, setFirstIdea] = useState("");
    const [secondIdea, setSecondIdea] = useState("");

    function valueHandler(val) {
        setValue(val);
    }
    function firstIdeaHandler(idea) {
        setFirstIdea(idea);
    }
    function secondIdeaHandler(idea) {
        setSecondIdea(idea);
    }

    // calculations
    const tip = (value * ((+firstIdea + +secondIdea) / 2)) / 100;
    const cost = tip + +value;

    return (
        <form>
            <Bill onVal={valueHandler} />
            <Idea onIdea={firstIdeaHandler}>
                What do you think about the service ?
            </Idea>
            <Idea onIdea={secondIdeaHandler}>
                What does your friend think about the service ?
            </Idea>
            <h3>
                The Cost is ${cost} (${value} + ${tip})
            </h3>
            <button>Reset</button>
        </form>
    );
}
