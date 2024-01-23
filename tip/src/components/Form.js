import Bill from "./Bill";
import Idea from "./Idea";

export default function Form() {
    return (
        <form>
            <Bill />
            <Idea>What do you think about the service ?</Idea>
            <Idea>What does your friend think about the service ?</Idea>
            <h3>The Cost is $100 ($100 + $15)</h3>
            <button>Reset</button>
        </form>
    );
}
