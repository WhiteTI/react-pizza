import "./scss/app.scss";
import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Sort from "./components/Sort/Sort.jsx";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock.jsx";

import pizzas from "../pizza.json";

function App() {
    const elements = pizzas.map(({ id, ...props }) => (
        <PizzaBlock key={id} {...props} />
    ));

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
                    <div className="content__items">{elements}</div>
                </div>
            </div>
        </div>
    );
}

export default App;
