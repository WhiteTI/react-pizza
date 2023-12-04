import { useState } from "react";

const usePizzaService = () => {
    const [isLoading, setIsLoading] = useState(false);
    const _apiBase = "https://6569fc73de53105b0dd7fcbe.mockapi.io/items";

    const request = async (url) => {
        setIsLoading(true);

        try {
            const response = await fetch(url);

            return await response.json();
        } catch (e) {
            console.log(e);
        }
    };

    const getAllPizzas = async (sort = { name: "rating" }, category = 0) => {
        return await request(
            `${_apiBase}?category=${category === 0 ? "" : category}&sortBy=${
                sort.name
            }&order=desc`,
        );
    };

    return {
        isLoading,
        setIsLoading,
        getAllPizzas,
    };
};

export default usePizzaService;
