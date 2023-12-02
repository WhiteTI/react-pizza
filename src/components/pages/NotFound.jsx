import { Link } from "react-router-dom";

import classes from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <div className={classes.container}>
            <h2>Такой страницы не существует :(</h2>
            <Link to="/" className={classes.nav}>
                На главную
            </Link>
        </div>
    );
};

export default NotFound;
