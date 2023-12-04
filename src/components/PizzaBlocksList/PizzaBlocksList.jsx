import PizzaBlock from "../PizzaBlock/PizzaBlock.jsx";
import { useContext, useEffect, useState } from "react";
import PizzaBlockSkeleton from "../Skeleton/PizzaBlockSkeleton.jsx";
import usePizzaService from "../../sevices/usePizzaService.js";
import { FilterAndSortContext } from "../../context/index.js";

const PizzaBlocksList = () => {
    const [pizzas, setPizzas] = useState([]);
    const { sort, category } = useContext(FilterAndSortContext);

    const { isLoading, setIsLoading, getAllPizzas } = usePizzaService();

    useEffect(() => {
        getAllPizzas()
            .then((data) => setPizzas(data))
            .then(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        getAllPizzas(sort, category)
            .then((data) => setPizzas(data))
            .then(() => setIsLoading(false));
    }, [sort, category]);

    const elements = pizzas.map(({ id, ...props }) => (
        <PizzaBlock key={id} {...props} />
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
