export default function Form(props) {
    function formSubmit(event) {
        event.preventDefault();
        const elements = event.currentTarget.elements;
        props.onData([
            {
                id: Math.random(),
                numbers: elements[0].value,
                title: elements[1].value,
            },
        ]);
    }

    return (
        <div className="form">
            <h3>What do you need for your 🌴 trip ?</h3>
            <form onSubmit={formSubmit}>
                <input type="number" min={1} placeholder="1" required />
                <input type="text" placeholder="Add item..." required />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
