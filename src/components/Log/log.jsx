import css from './LogInForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/workWithBackend/operations';
import { selectError } from '../../redux/workWithBackend/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { cleanError } from '../../redux/workWithBackend/slice';

const LogInForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);

    useEffect(() => {
        if(Number(error) === 400){toast.error('Invalid login ')};
        dispatch(cleanError());
    }, [error, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        dispatch(logIn({email, password}));
    };

    return(
        <div className={css.divLogInForm}>
            <h2 className={css.titleLogInForm}>Sign in  your Phonebook 🤳</h2>
            <form className={css.logInForm} onSubmit={handleSubmit}>
                <label className={css.labelLogInForm}>
                    <span className={css.pRegLogInForm}>Email</span>
                <input className={css.inputLogInForm} 
                name='Email'
                type="email"
                autoComplete="off"
                autoFocus
                placeholder="Please, enter your valid email" />
                </label>
                <label className={css.labelLogInForm}>
                    <span className={css.pLogInForm}>Password</span>
                <input className={css.inputLogInForm} 
                name='Password'
                type="password"
                autoComplete="off"
                autoFocus
                placeholder="The password must consist of at least 7 characters" />
                </label>
                <button className={css.buttonLogOrReg} type="submit">Sign in</button>
            </form>
            <ToastContainer />
            </div>
    )
};

export default LogInForm;