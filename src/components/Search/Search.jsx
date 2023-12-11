import classes from "./Search.module.scss";
import { useContext } from "react";
import { PizzaContext } from "../../context/index.js";

const Search = () => {
    const { search, setSearch } = useContext(PizzaContext);

    return (
        <input
            type="search"
            name="search"
            placeholder="Поиск пиццы..."
            className={classes.root}
            value={search}
            onChange={() => setSearch(event.target.value)}
        />
    );
};

export default Search;
