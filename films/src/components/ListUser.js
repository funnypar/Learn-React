import { useState } from "react";
import Btn from "./Btn";
import ItemUser from "./ItemUser";

export default function ListUser({ database }) {
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
            {!showBtn ? (
                <div className="user-control">
                    <h3>FILMS YOU WATCHED</h3>
                    <div>
                        <ul>
                            <li>#️⃣ 2 Films</li>
                            <li>⭐️ 8.65</li>
                            <li>🌟 9.5</li>
                            <li>⏳ 132 min</li>
                        </ul>
                    </div>
                </div>
            ) : (
                ""
            )}
            {!showBtn
                ? database.map((el) => {
                      return (
                          <ItemUser
                              name={el.Title}
                              poster={el.Poster}
                              userRating={el.userRating}
                              imdbRating={el.imdbRating}
                              time={el.runtime}
                          />
                      );
                  })
                : ""}
        </div>
    );
}
