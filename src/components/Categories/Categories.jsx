import { useContext } from "react";
import { FilterAndSortContext } from "../../context/index.js";

const Categories = () => {
    const { category, setCategory } = useContext(FilterAndSortContext);

    const pizzaCategories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];

    const onSelectCategory = (id) => {
        setCategory(id);
    };

    const elements = pizzaCategories.map((pizzaCategory, index) => (
        <li
            key={pizzaCategory}
            onClick={() => onSelectCategory(index)}
            className={category === index ? "active" : ""}
        >
            {pizzaCategory}
        </li>
    ));

    return (
        <div className="categories">
            <ul>{elements}</ul>
        </div>
    );
};

export default Categories;
