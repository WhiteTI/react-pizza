import axios from "axios";

const usePizzaService = () => {
    const url = new URL("https://6569fc73de53105b0dd7fcbe.mockapi.io/items");
    url.searchParams.append("limit", "4");

    const request = async (url) => {
        try {
            const response = await axios.get(url);

            return await response.data;
        } catch (e) {
            console.log(e);
        }
    };

    const getPizzas = async (
        sort = { name: "rating" },
        category = 0,
        order = false,
        page = 1,
    ) => {
        url.searchParams.set("page", page);
        url.searchParams.set("sortBy", sort.name);
        url.searchParams.set("order", order ? "desc" : "asc");
        category !== 0 ? url.searchParams.set("category", category) : null;

        return await request(url);
    };

    return {
        getPizzas,
    };
};

export default usePizzaService;
