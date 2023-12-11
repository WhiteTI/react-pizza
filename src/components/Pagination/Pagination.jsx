import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.scss";
import { useContext } from "react";
import { PizzaContext } from "../../context/index.js";
const Pagination = () => {
    const { setPage } = useContext(PizzaContext);

    return (
        <ReactPaginate
            className={classes.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => setPage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
