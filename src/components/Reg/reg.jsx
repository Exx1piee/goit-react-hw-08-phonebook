import css from '../Styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/BackEndProps/operations';
import { selectError } from '../../redux/BackEndProps/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { cleanError } from '../../redux/BackEndProps/slice';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);

    useEffect(() => {
        if(Number(error) === 400){toast.error('Invalid data')};
        dispatch(cleanError());
    }, [error, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.currentTarget.elements.name.value;
        const email = e.currentTarget.elements.email.value;
        const password = e.currentTarget.elements.password.value;
        dispatch(register({name, email, password}));
    };

    return(
        <div className={css.divRegisterForm}>
            <h2 className={css.titleRegisterForm}>Please, sign up in Phonebook 🤳</h2>
            <form className={css.registerForm} onSubmit={handleSubmit}>
                <label className={css.labelRegisterForm}>
                    <span className={css.pRegisterForm}>Name</span>
                <input className={css.inputRegisterForm} 
                name='Name'
                type="text"
                autoFocus
                placeholder="Please, enter your real name" />
                </label>
                <label className={css.labelRegisterForm}>
                    <span className={css.pRegisterForm}>Email</span>
                <input className={css.inputRegisterForm} 
                name='Email'
                type="email"
                autoComplete="off"
                autoFocus
                placeholder="Please, enter your valid email" />
                </label>
                <label className={css.labelRegisterForm}>
                    <span className={css.pRegisterForm}>Password</span>
                <input className={css.inputRegisterForm} 
                name='Password'
                type="password"
                autoComplete="off"
                autoFocus
                placeholder="The password must consist of at least 7 characters" />
                </label>
                <button className={css.buttonLogOrReg} type="submit">Sign up</button>
            </form>
            <ToastContainer />
            </div>
    )
};

export default RegisterForm;