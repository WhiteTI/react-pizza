import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.jsx";

import "./scss/app.scss";
import MainPage from "./components/pages/MainPage.jsx";
import CartPage from "./components/pages/CartPage.jsx";
import NotFound from "./components/pages/NotFound.jsx";

function App() {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage />}
                        errorElement={<NotFound />}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage />}
                        errorElement={<NotFound />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
