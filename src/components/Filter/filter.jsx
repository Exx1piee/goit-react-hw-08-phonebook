import css from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
    const filterWithState = useSelector(selectFilter);
    const dispatch = useDispatch();

    const updateStateForFilter = (evt) => {
        evt.preventDefault();
        const filterValue = evt.target.value;
        dispatch(setFilter(filterValue));
    };

        return(
            <label className={css.labelFilter}>
                <input 
                value={filterWithState}
                className={css.inputFilter} 
                type="text" 
                name="filter" 
                placeholder='Type name that you wanna find!! 🔎'
                onChange={updateStateForFilter}
                />
            </label>
        )
}