import PizzaBlock from "../PizzaBlock/PizzaBlock.jsx";
import { useEffect, useState } from "react";

const PizzaBlocksList = () => {
    const [pizzas, setPizzas] = useState([]);

    async function fetchPizzas() {
        try {
            const response = await fetch(
                "https://6569fc73de53105b0dd7fcbe.mockapi.io/items",
            );

            const data = await response.json();
            setPizzas(data);
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

    return <>{elements}</>;
};

export default PizzaBlocksList;
