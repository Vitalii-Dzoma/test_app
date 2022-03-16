import { useState } from 'react';
import s from './SecondHeader.module.css';
export const SecondHeader = () => {
  return (
    <div
      className={s.secondHeader}
      style={{
        fontFamily: 'Rubik',
      }}
    >
      <ul className={s.secondHeaderList}>
        <li className="nav-item">
          <button
            className="nav__button"
            style={{
              fontFamily: 'Rubik',
            }}
          >
            Show all
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav__button"
            style={{
              fontFamily: 'Rubik',
            }}
          >
            All grades
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav__button"
            style={{
              fontFamily: 'Rubik',
            }}
          >
            All classes
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav__button"
            style={{
              fontFamily: 'Rubik',
            }}
          >
            AV Score
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav__button"
            style={{
              fontFamily: 'Rubik',
            }}
          >
            AV Speed
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav__button"
            style={{
              fontFamily: 'Rubik',
            }}
          >
            All Classes
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav__button"
            style={{
              fontFamily: 'Rubik',
            }}
          >
            Clear all
          </button>
        </li>
      </ul>
    </div>
  );
};
