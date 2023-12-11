import { useDispatch, useSelector } from "react-redux";
import { activeCategoryChanged } from "../../slices/filterSlice.js";

const Categories = () => {
    const { category } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const pizzaCategories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];

    const onSelectCategory = (id) => {
        dispatch(activeCategoryChanged(id));
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
