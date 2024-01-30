import { useState } from "react";
import Btn from "./Btn";
import Item from "./Item";

export default function List({ database }) {
    const [showBtn, setShowBtn] = useState(false);

    return (
        <div className="list">
            <Btn onClicked={() => setShowBtn(!showBtn)}>
                {showBtn ? (
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
            </Btn>
            {!showBtn
                ? database.map((el) => {
                      return (
                          <Item
                              name={el.Title}
                              year={el.Year}
                              poster={el.Poster}
                              key={el.imbdID}
                          />
                      );
                  })
                : ""}
        </div>
    );
}
