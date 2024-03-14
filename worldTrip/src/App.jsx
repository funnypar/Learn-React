import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Pagenotfound from "./pages/Pagenotfound";
import Main from "./pages/Main";
import CityList from "./components/CityList";
import { useState, useEffect } from "react";

const URL = "http://localhost:9000";

function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="login" element={<Login />} />
                <Route path="app" element={<Main />}>
                    <Route
                        index
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route
                        path="cities"
                        element={
                            <CityList cities={cities} isLoading={isLoading} />
                        }
                    />
                    <Route path="countries" element={<p>countries</p>} />
                </Route>
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
