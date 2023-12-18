import PizzaBlock from "../PizzaBlock/PizzaBlock.jsx";
import { useContext, useEffect, useState } from "react";
import PizzaBlockSkeleton from "../Skeleton/PizzaBlockSkeleton.jsx";
import { PizzaContext } from "../../context/index.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../slices/pizzaSlice.js";

const PizzaBlocksList = () => {
    const [searchedPizzas, setSearchedPizzas] = useState([]);
    const { search } = useContext(PizzaContext);

    const dispatch = useDispatch();

    const { pizzas, pizzasLoadingStatus } = useSelector((state) => state.pizza);

    const { category, order, sort, page } = useSelector(
        (state) => state.filter,
    );

    useEffect(() => {
        dispatch(fetchPizzas());
    }, []);

    useEffect(() => {
        dispatch(fetchPizzas([sort, category, order, page]));
    }, [sort, category, order, page]);

    useEffect(() => {
        searchPizzas();
    }, [search, pizzas]);

    const searchPizzas = () => {
        const searched = pizzas.filter((pizza) =>
            pizza.title.toLowerCase().includes(search.toLowerCase()),
        );
        setSearchedPizzas(searched);
    };

    const elements = searchedPizzas.map(({ id, ...props }) => (
        <PizzaBlock key={id} id={id} {...props} />
    ));

    const skeletons = () => {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(<PizzaBlockSkeleton key={i} />);
        }
        return arr;
    };

    return <>{pizzasLoadingStatus === "loading" ? skeletons() : elements}</>;
};

export default PizzaBlocksList;
