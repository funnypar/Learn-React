/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function ProtectRoute({ children }) {
    const { isAuthLogin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthLogin) navigate("/");
    }, [isAuthLogin, navigate]);

    return isAuthLogin ? children : null;
}
