/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const URL = "http://localhost:9000";

const citiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(() => {
        async function dataFetch() {
            try {
                setIsLoading(true);
                const req = await fetch(`${URL}/cities`);
                const data = await req.json();
                setCities(data);
                setIsLoading(false);
            } catch (err) {
                console.log(err.message);
            }
        }
        dataFetch();
    }, []);

    async function getCity(id) {
        try {
            const req = await fetch(`${URL}/cities/${id}`);
            const data = await req.json();
            setCurrentCity(data);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <citiesContext.Provider
            value={{ cities, isLoading, currentCity, getCity }}
        >
            {children}
        </citiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(citiesContext);
    if (context === undefined)
        throw new Error("The provider wrap not this part!");
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
