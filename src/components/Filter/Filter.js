import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <>
      {contacts.length > 0 && (
        <FilterLabel>
          Find contacts by name
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={e => dispatch(changeFilter(e.target.value))}
          />
        </FilterLabel>
      )}
    </>
  );
};
