import { useState } from 'react';
import s from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const ucFirst = str => {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  };

  const handleChangeName = e => {
    const { name, value } = e.currentTarget;
    setName(ucFirst(value));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name);

    // this.disabledButton();
    reset();
  };

  const reset = () => {
    setName('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {' '}
      <label className={s.formLabel}>Students</label>
      <div>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          onChange={handleChangeName}
          autoFocus
          placeholder="Enter Student Name, Parent or ID here"
          value={name}
        />
        <button type="submit" className={s.buttonSearch}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z"
              fill="#C0C0C0"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
