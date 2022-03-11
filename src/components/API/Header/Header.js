import { useState } from 'react';
import s from './Header.module.css';
export const HeaderOnPage = () => {
  return (
    <header>
      <div className={s.header}>
        <div className="selector">School 1</div>
        <ul className={s.nav}>
          <li className="nav-item">
            <button className="nav__button">Analytics</button>
          </li>
          <li className="nav-item">
            <button className="nav__button">Gragebooks</button>
          </li>
          <li className="nav-item">
            <button className="nav__button">Tests</button>
          </li>
          <li className="nav-item">
            <button className="nav__button">Students</button>
          </li>
          <li className="nav-item">
            <button className="nav__button">Teachers</button>
          </li>
          <li className="nav-item">
            <button className="nav__button">Archive</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
