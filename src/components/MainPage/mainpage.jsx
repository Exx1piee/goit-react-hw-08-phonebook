import css from './mainpage.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/BackEndProps/selectors';

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <div className={css.allDivHome}>
        <div className={css.greetingHome}>
        <h2 className={css.hllGreetingHome}>Hello, in </h2><span className={css.logoNameGreetingHome}>MyPhoneBook</span>
        </div>
        <div className={css.buttonsHome}>
        {isLoggedIn ? (
            <Link to={'/contacts'}>
                <button className={css.buttonHome}>Sign  in <span className={css.logoNameBtnHome}>MyPhoneBook   </span></button>
            </Link>
        ) : (
            <>
            <Link to={'/login'}>
            <button className={css.buttonHome}>I have <span className={css.logoNameBtnHome}>MyPhoneBook    (sign in)  </span></button>
            </Link>
            <Link to={'/register'}>
            <button className={css.buttonHome}>I dont have <span className={css.logoNameBtnHome}>MyPhoneBook</span>, 
            <br/>but I want  <span className={css.logoNameBtnHome}>sign up</span></button>
            </Link>
            </>
        )}
        </div>
        </div>
    )
};

export default Home;