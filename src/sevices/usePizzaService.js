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

    const getAllPizzas = async (
        sort = { name: "rating" },
        category = 0,
        order = false,
        page = 1,
    ) => {
        sort = sort.name;
        order = order ? "desc" : "asc";
        category = category === 0 ? "" : `&category=${category}`;

        return await request(
            `${_apiBase}?page=${page}&limit=4&sortBy=${sort}&order=${order}${category}`,
        );
    };

    return {
        isLoading,
        setIsLoading,
        getAllPizzas,
    };
};

export default usePizzaService;
