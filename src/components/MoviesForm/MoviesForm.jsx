import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import s from './moviesForm.module.css';

const SearchBar = ({ valueOfInput }) => {
  // state = {
  //   inputValue: '',
  // };
  const [inputValue, setInputValue] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'inputValue':
        setInputValue(value);
        break;

      default:
        return;
    }
  };

  const onSubmitEvent = e => {
    e.preventDefault();
    valueOfInput(inputValue);
    setInputValue('');
  };

  return (
    <header className={s['Searchbar']}>
      <form className={s['SearchForm']} onSubmit={onSubmitEvent}>
        <button
          disabled={inputValue.trim() === ''}
          type="submit"
          className={s['SearchForm-button']}
        >
          <ImSearch
            style={{ marginRight: 3, marginTop: 7, width: 23, height: 23 }}
          />
          <span className={s['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={s['SearchForm-input']}
          type="text"
          name="inputValue"
          value={inputValue}
          onChange={onInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
