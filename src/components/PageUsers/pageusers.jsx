import { ContactForm } from 'components/ContactForm/contactform';
import { Filter } from 'components/Filter/filter';
import { ContactList } from 'components/ContactList/contactlist';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/BackEndProps/selectors';
import css from './pageusers.module.css';

const PageUsers = () => {
    const token = useSelector(selectToken);
    if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    return(
        <>
        <div className={css.divContFiltPageUsers}>
        <Filter />
        <ContactForm />
        </div>
        <ContactList />
        </>
    )
};

export default PageUsers;