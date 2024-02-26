import Options from "./Options";

export default function Box() {
    return (
        <div className="box">
            <div>
                <input type="text" />
                <Options />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>

                <Options />
            </div>
            <h3>Output</h3>
        </div>
    );
}
