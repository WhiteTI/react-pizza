import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { FilterAndSortContext as Context } from "./context/index.js";

import Header from "./components/Header/Header.jsx";
import MainPage from "./components/pages/MainPage.jsx";
import CartPage from "./components/pages/CartPage.jsx";
import NotFound from "./components/pages/NotFound.jsx";

import "./scss/app.scss";

function App() {
    const [sort, setSort] = useState({ name: "rating", value: "популярности" });
    const [category, setCategory] = useState(0);

    return (
        <div className="wrapper">
            <Context.Provider
                value={{
                    sort,
                    setSort,
                    category,
                    setCategory,
                }}
            >
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
            </Context.Provider>
        </div>
    );
}

export default App;
