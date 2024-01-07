import './App.css';

const DATABASE = [{"How are you ?": "Good"}];

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
    return(
        <div className='card'>{Object.keys(data)}</div>
    )
}

export default App;
