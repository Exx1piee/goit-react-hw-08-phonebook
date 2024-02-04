import css from './usrmenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsEmail } from '../../redux/BackEndProps/selectors';
import { logOut } from '../../redux/BackEndProps/operations';
import { Link } from 'react-router-dom';

const UserMenu = () => {
    const usEmail = useSelector(selectUsEmail);
    const dispatch = useDispatch();
    return(
        <div className={css.divUserMenu}>
            <p className={css.pUserMenu}>{usEmail}</p>
            <Link to={'/'}>
            <button className={css.buttonUserMenu} onClick={() => {dispatch(logOut())}}>Logout 🚪</button>
            </Link>
        </div>
    )
};

export default UserMenu;