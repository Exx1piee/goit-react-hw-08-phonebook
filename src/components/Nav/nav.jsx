import { Link } from "react-router-dom";
import css from './nav.module.css';

export const Navigation = () => {
    return(
        <div className={css.divNavigation}>
            <nav className={css.navNavigation}>
            <Link to={'/'} className={css.aNavigation}>
                <p className={css.pNavigation}>Home</p>
            </Link>
            </nav>
        </div>
    )
};