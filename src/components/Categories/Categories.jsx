import { useState } from "react";

const Categories = () => {
    const [active, setActive] = useState(0);

    const pizzaCategories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];

    const onSelectCategory = (id) => {
        setActive(id);
    };

    const elements = pizzaCategories.map((pizzaCategory, index) => (
        <li
            key={pizzaCategory}
            onClick={() => onSelectCategory(index)}
            className={active === index ? "active" : ""}
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
