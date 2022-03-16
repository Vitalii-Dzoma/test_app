import { useState } from 'react';
import s from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChangeName = e => {
    const { name, value } = e.currentTarget;
    setName(value);
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
    <form
      className={s.form}
      onSubmit={handleSubmit}
      style={{
        fontFamily: 'Rubik',
      }}
    >
      <button type="submit" className={s.button}>
        <span className="button-label"></span>
      </button>

      <input
        className={s.input}
        type="text"
        autoComplete="off"
        onChange={handleChangeName}
        autoFocus
        placeholder="Search images and photos"
        value={name}
      />
    </form>
  );
};
