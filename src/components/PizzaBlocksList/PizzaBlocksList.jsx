import PizzaBlock from "../PizzaBlock/PizzaBlock.jsx";
import { useContext, useEffect, useState } from "react";
import PizzaBlockSkeleton from "../Skeleton/PizzaBlockSkeleton.jsx";
import usePizzaService from "../../sevices/usePizzaService.js";
import { PizzaContext } from "../../context/index.js";
import { useSelector } from "react-redux";

const PizzaBlocksList = () => {
    const [pizzas, setPizzas] = useState([]);
    const [searchedPizzas, setSearchedPizzas] = useState([]);
    const { search } = useContext(PizzaContext);

    const { isLoading, setIsLoading, getPizzas } = usePizzaService();

    const { category, order, sort, page } = useSelector(
        (state) => state.filter,
    );

    useEffect(() => {
        getPizzas()
            .then((res) => setPizzas(res.data))
            .then(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        getPizzas(sort, category, order, page)
            .then((res) => {
                setPizzas(res.data);
            })
            .then(() => setIsLoading(false));
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

    return <>{isLoading ? skeletons() : elements}</>;
};

export default PizzaBlocksList;
