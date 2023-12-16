import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.scss";
import { useDispatch } from "react-redux";
import { activePageChanged } from "../../slices/filterSlice.js";

const Pagination = () => {
    const dispatch = useDispatch();

    return (
        <ReactPaginate
            className={classes.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) =>
                dispatch(activePageChanged(event.selected + 1))
            }
            pageRangeDisplayed={4}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
