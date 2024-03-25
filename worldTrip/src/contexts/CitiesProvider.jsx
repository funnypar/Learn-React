/* eslint-disable react/prop-types */
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from "react";

const URL = "http://localhost:9000";

const citiesContext = createContext();

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return { ...state, isLoading: true };
        case "error":
            return {
                ...state,
                isLoading: false,
                error: new Error(action.payload),
            };
        case "cities/loaded":
            return { ...state, isLoading: false, cities: action.payload };
        case "city/loaded":
            return { ...state, isLoading: false, currentCity: action.payload };
        case "city/created":
            return {
                ...state,
                isLoading: false,
                cities: [...state.cities, action.payload],
                currentCity: action.payload,
            };
        case "city/deleted":
            return {
                ...state,
                isLoading: false,
                cities: state.cities.filter(
                    (city) => city.id !== action.payload
                ),
                currentCity: {},
            };
        default:
            throw new Error("Action Is Unknown!");
    }
}

function CitiesProvider({ children }) {
    // eslint-disable-next-line no-unused-vars
    const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function dataFetch() {
            try {
                dispatch({ type: "loading" });
                const req = await fetch(`${URL}/cities`);
                const data = await req.json();
                dispatch({ type: "cities/loaded", payload: data });
            } catch (err) {
                dispatch({ type: "error", payload: err.message });
            }
        }
        dataFetch();
    }, []);

    async function getCity(id) {
        try {
            dispatch({ type: "loading" });
            const req = await fetch(`${URL}/cities/${id}`);
            const data = await req.json();
            dispatch({ type: "city/loaded", payload: data });
        } catch (err) {
            dispatch({ type: "error", payload: err.message });
        }
    }

    async function createCity(newCity) {
        try {
            dispatch({ type: "loading" });
            const req = await fetch(`${URL}/cities`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: { "Content-Type": "application/json" },
            });
            const data = await req.json();
            dispatch({ type: "city/created", payload: data });
        } catch (err) {
            dispatch({ type: "error", payload: err.message });
        }
    }

    async function deleteCity(id) {
        try {
            dispatch({ type: "loading" });
            await fetch(`${URL}/cities/${id}`, {
                method: "DELETE",
            });
            dispatch({ type: "city/deleted", payload: id });
        } catch (err) {
            dispatch({ type: "error", payload: err.message });
        }
    }

    const values = useMemo(() => {
        return {
            cities,
            isLoading,
            currentCity,
            getCity,
            createCity,
            deleteCity,
        };
    }, [cities, isLoading, currentCity]);

    return (
        <citiesContext.Provider value={values}>
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
