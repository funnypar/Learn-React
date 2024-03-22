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
            setIsLoading(true);
            const req = await fetch(`${URL}/cities/${id}`);
            const data = await req.json();
            setCurrentCity(data);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function createCity(newCity) {
        try {
            setIsLoading(true);
            const req = await fetch(`${URL}/cities`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: { "Content-Type": "application/json" },
            });
            const data = await req.json();
            setCities((cities) => [...cities, data]);
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteCity(id) {
        try {
            setIsLoading(true);
            await fetch(`${URL}/cities/${id}`, {
                method: "DELETE",
            });
            setCities((cities) => cities.filter((city) => city.id !== id));
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <citiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                getCity,
                createCity,
                deleteCity,
            }}
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
