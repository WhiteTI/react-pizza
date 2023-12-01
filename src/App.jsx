import "./scss/app.scss";
import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Sort from "./components/Sort/Sort.jsx";
import PizzaBlocksList from "./components/PizzaBlocksList/PizzaBlocksList.jsx";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaBlocksList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
