/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const authContext = createContext();

const initialState = { user: null, isAuthLogin: false };

function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload, isAuthLogin: true };
        case "logout":
            return { ...state, user: null, isAuthLogin: false };
        default:
            throw new Error("The Action is Unknown!");
    }
}

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "123",
    avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
    const [{ user, isAuthLogin }, dispatch] = useReducer(reducer, initialState);

    function login(email, password) {
        if (email === FAKE_USER.email && password === FAKE_USER.password)
            dispatch({ type: "login", payload: FAKE_USER });
    }
    function logout() {
        dispatch({ type: "logout" });
    }

    return (
        <authContext.Provider value={{ user, isAuthLogin, login, logout }}>
            {children}
        </authContext.Provider>
    );
}

function useAuth() {
    const context = useContext(authContext);
    if (context === undefined)
        throw new Error("Something went wrong in context!");
    return context;
}

export { AuthProvider, useAuth };
