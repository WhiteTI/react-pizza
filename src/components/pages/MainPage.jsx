import Categories from "../Categories/Categories.jsx";
import Sort from "../Sort/Sort.jsx";
import PizzaBlocksList from "../PizzaBlocksList/PizzaBlocksList.jsx";

const MainPage = () => {
    return (
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
    );
};

export default MainPage;
