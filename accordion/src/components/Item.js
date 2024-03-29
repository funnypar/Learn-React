export default function Item({ curItem, onCurItem, datas, numItem }) {
    const show = numItem === curItem;

    function showHalndelr() {
        onCurItem(numItem);
    }

    return (
        <div className={"item"} onClick={showHalndelr}>
            <div className={`header-wrapper ${show ? "active" : ""}`}>
                <h4>{datas.id}</h4>
                <h3>{datas.question}</h3>
                {!show ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M5 12h14"
                        />
                    </svg>
                )}
            </div>
            {show ? <p>{datas.answer}</p> : ""}
        </div>
    );
}
