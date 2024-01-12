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
    const [count,setCount] = useState(0);
    const [period,setPeriod] = useState(1);
    // handle Error
    if (count < 0) {
        setCount(0)
        alert("Please insert positive number :)")
    }
    // -------------- Dates ----------------------------------------
    const date1 = new Date();
    // calculation for date 2
    date1.setDate(date1.getDate() + count);

    function inputHandler(event) {
        setCount(+event.target.value);
    }
    // ------------ handle content ---------------------------------
    let content = `${count} days after today is ${date1.toDateString()}`;
    if (count == 0) {
        content = "Today is a gift :)";
    } 
    // ------------ handlers  ----------------------------------- 
    function prevClickHandler(event) {
        event.preventDefault();
        if (period == 1) {
            setCount(count - 1)
        }else {
            setCount(count - period)
        }
    }
    function nextClickHandler(event) {
        event.preventDefault();
        if (period == 1) {
            setCount(count + 1)
        }else {
            setCount(count + period)
        }
    }
    function periodHandler(event) {
        setPeriod(+event.target.value);
    }
    function resetHandler(event) {
        event.preventDefault();
        setCount(0)
        setPeriod(1)
    }
    // ------------ Return JSX ------------------------------------ 
    return(
        <div className='box'>
            <form >
                <div>
                    <p>The period : {period}</p>
                    <input type="range" min={1} max={10} value={period} onChange={periodHandler}/>
                </div>
                <div>
                    <button className="btn-small" onClick={prevClickHandler}>&#60;</button>
                    <input type="text" min={1} value={count} onChange={inputHandler}/>
                    <button className="btn-small" onClick={nextClickHandler}>&gt;</button>
                </div>
                <p>{content}</p>
                <button className="btn" onClick={resetHandler}>Reset</button>
            </form>
        </div>
    )
}


export default App;
