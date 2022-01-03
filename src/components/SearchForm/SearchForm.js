import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchform.module.css';
import { BiSearch } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SearchForm({ onSubmit }) {
  const [searchRequest, setSearchRequest] = useState('');

  let navigate = useNavigate();
  let location = useLocation();

  const handleSearch = e => {
    setSearchRequest(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (searchRequest.trim() === '') {
    //   toast.error('Enter your search request, please', {
    //     position: toast.POSITION.TOP_CENTER,
    //   });
    //   return;
    // }
    navigate({ ...location, search: `query=${searchRequest}` });
    setSearchRequest('');
  };

  return (
    <header className={s.Searchbar} onSubmit={handleSubmit}>
      <form className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
          <BiSearch className={s.SearchIcon} />
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchRequest}
          onChange={handleSearch}
        />
      </form>
    </header>
  );
}

SearchForm.propTypes = {
  searchRequest: PropTypes.string,
};
