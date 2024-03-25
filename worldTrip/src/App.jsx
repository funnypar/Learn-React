import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { CitiesProvider } from "./contexts/CitiesProvider";
import { AuthProvider } from "./contexts/AuthProvider";
import ProtectRoute from "./pages/ProtectRoute";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const Login = lazy(() => import("./pages/Login"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"));
const Main = lazy(() => import("./pages/Main"));

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Suspense fallback={<SpinnerFullPage />}>
                    <CitiesProvider>
                        <Routes>
                            <Route index element={<Homepage />} />
                            <Route path="product" element={<Product />} />
                            <Route path="pricing" element={<Pricing />} />
                            <Route path="login" element={<Login />} />
                            <Route
                                path="app"
                                element={
                                    <ProtectRoute>
                                        <Main />
                                    </ProtectRoute>
                                }
                            >
                                <Route
                                    index
                                    element={<Navigate to="cities" />}
                                />
                                <Route path="cities" element={<CityList />} />
                                <Route path="cities/:id" element={<City />} />
                                <Route
                                    path="countries"
                                    element={<CountryList />}
                                />
                                <Route path="form" element={<Form />} />
                            </Route>
                            <Route path="*" element={<Pagenotfound />} />
                        </Routes>
                    </CitiesProvider>
                </Suspense>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
