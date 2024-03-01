import { useEffect } from "react";

export function useKey(key, userFuncion) {
    useEffect(
        function () {
            function callback(e) {
                if (e.code.toLowerCase() === key.toLowerCase()) {
                    userFuncion();
                }
            }
            document.addEventListener("keydown", callback);
            return () => document.removeEventListener("keydown", callback);
        },
        [userFuncion, key]
    );
}
