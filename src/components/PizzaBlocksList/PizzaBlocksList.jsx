import PizzaBlock from "../PizzaBlock/PizzaBlock.jsx";
import { useEffect, useState } from "react";
import PizzaBlockSkeleton from "../Skeleton/PizzaBlockSkeleton.jsx";

const PizzaBlocksList = () => {
    const [pizzas, setPizzas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchPizzas() {
        try {
            const response = await fetch(
                "https://6569fc73de53105b0dd7fcbe.mockapi.io/items",
            );

            const data = await response.json();
            setPizzas(data);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPizzas();
    }, []);

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
