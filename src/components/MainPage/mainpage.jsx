import css from '../Styles.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/BackEndProps/selectors';
const MainPage = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <div className={css.allDivHome}>
        <div className={css.greetingHome}>
        <h2 className={css.hllGreetingHome}>Hello, in </h2><span className={css.logoNameGreetingHome}>MyPhoneBook</span>
        </div>
        <div className={css.buttonsHome}>
        {isLoggedIn ? (
            <Link to={'/contacts'}>
                <button className={css.buttonHome}>Log In in <span className={css.logoNameBtnHome}>MyPhoneBook</span></button>
            </Link>
        ) : (
            <>
            <Link to={'/login'}>
            <button className={css.buttonHome}>I have <span className={css.logoNameBtnHome}>MyPhoneBook</span></button>
            </Link>
            <Link to={'/register'}>
            <button className={css.buttonHome}>I haven't <span className={css.logoNameBtnHome}>MyPhoneBook</span>, 
            <br/>but I want will have that</button>
            </Link>
            </>
        )}
        </div>
        </div>
    )
};

export default MainPage;