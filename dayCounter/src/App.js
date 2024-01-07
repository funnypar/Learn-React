import {useState} from "react";
import './App.css';

function App() {
  return(
    <div className='App'>
        <h1>Day Counter</h1>
        <Box />
    </div>
  )
}

function Box() {
    return(
        <div className='box'>
            <form >
                <div>
                    <p>7</p>
                    <input type="range" min={1} max={10} />
                </div>
                <div>
                    <button className="btn-small">&#60;</button>
                    <input min={1}/>
                    <button className="btn-small">&gt;</button>
                </div>
                <p>Hello</p>
                <button className="btn">Reset</button>
            </form>
        </div>
    )
}


export default App;
