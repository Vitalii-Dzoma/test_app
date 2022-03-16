import { useState } from 'react';
import s from './Header.module.css';
export const HeaderOnPage = () => {
  return (
    <header>
      <div className={s.header}>
        <div className="selector">School 1</div>
        <ul className={s.nav}>
          <li className="nav-item">
            <button
              className={s.nav__button}
              style={{
                fontFamily: 'inherit',
              }}
            >
              Analytics
            </button>
          </li>
          <li className="nav-item">
            <button
              className={s.nav__button}
              style={{
                fontFamily: 'inherit',
              }}
            >
              Gragebooks
            </button>
          </li>
          <li className="nav-item">
            <button
              className={s.nav__button}
              style={{
                fontFamily: 'inherit',
              }}
            >
              Tests
            </button>
          </li>
          <li className="nav-item">
            <button
              className={s.nav__button}
              style={{
                fontFamily: 'inherit',
              }}
            >
              Students
            </button>
          </li>
          <li className="nav-item">
            <button
              className={s.nav__button}
              style={{
                fontFamily: 'inherit',
              }}
            >
              Teachers
            </button>
          </li>
          <li className="nav-item">
            <button
              className={s.nav__button}
              style={{
                fontFamily: 'inherit',
              }}
            >
              Archive
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
