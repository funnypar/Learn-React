import {useState} from "react";
import './App.css';

const DATABASE = [{"What language is React based on ?": "Javascript"},
{"What are the building blocks of React apps ?": "Components"}, 
{"What's the name of the syntax we use to describe a UI in React ?" : "JSX"},
{"How to pass data from parent to child components ? " : "Props"},
{"How to give components memory ?" : "State"}, 
{"What do we call an input element that is completely synchronised with state ?" : "Google it ;)"}];

function App() {
  return(
    <div className='App'>
        <FlashCard />
    </div>
  )
}

function FlashCard() {
    return(
        <div className='card-wrapper'>
            {DATABASE.map(el => {
                return <Card data={el}/>
            })}
        </div>
    )
}

function Card({data}) {
    let [active, onActive] = useState(true)
    function answer() {
        if (active == true) {
            onActive(false);
        }else {
            onActive(true);
        }
    }
    return(
        <div className='card' onClick={answer}>
            <div class={`card-body ${active ? '' : 'card-rotate'}`}>
                <div class="card-front">
                    <p>{Object.keys(data)}</p>
                </div>
                <div class="card-back">
                    <p>{Object.values(data)}</p>
                </div>
            </div>
        </div>
    )
}

export default App;
