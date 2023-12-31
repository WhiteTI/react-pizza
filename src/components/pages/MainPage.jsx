import Categories from "../Categories/Categories.jsx";
import Sort from "../Sort/Sort.jsx";
import PizzaBlocksList from "../PizzaBlocksList/PizzaBlocksList.jsx";
import Pagination from "../Pagination/Pagination.jsx";

const MainPage = () => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                <PizzaBlocksList />
            </div>
            <Pagination />
        </div>
    );
};

export default MainPage;
