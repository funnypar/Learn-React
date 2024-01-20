export default function Items(props) {
    function doneHandler(event) {
        event.target.parentElement.querySelector("p").classList.toggle("done");
    }

    return (
        <div className="list">
            <div className="items-wrapper">
                {props.datas.map((el) => {
                    return (
                        <div key={el[0].id}>
                            <input type="checkbox" onClick={doneHandler} />
                            <p>
                                <span>
                                    {el[0].numbers} {el[0].title}
                                </span>
                            </p>
                            <button
                                className="x-sign"
                                onClick={() => props.onDeleteData(el[0].id)}
                            >
                                &#10005;
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
