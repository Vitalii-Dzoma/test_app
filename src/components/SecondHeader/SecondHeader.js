import { useState } from 'react';
import s from './SecondHeader.module.css';
export const SecondHeader = () => {
  return (
    <div className={s.secondHeader}>
      <ul className={s.secondHeaderList}>
        <li className="nav-item">
          <button className={s.nav__button}>
            Show all
            <svg
              className={s.svg_button}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333374 0.333374L4.50004 4.50004L8.66671 0.333374H0.333374Z"
                fill="#C0C0C0"
              />
            </svg>
          </button>
        </li>
        <li className="nav-item">
          <button className={s.nav__button}>
            All grades
            <svg
              className={s.svg_button}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333374 0.333374L4.50004 4.50004L8.66671 0.333374H0.333374Z"
                fill="#C0C0C0"
              />
            </svg>
          </button>
        </li>
        <li className="nav-item">
          <button className={s.nav__button}>
            All classes
            <svg
              className={s.svg_button}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333374 0.333374L4.50004 4.50004L8.66671 0.333374H0.333374Z"
                fill="#C0C0C0"
              />
            </svg>
          </button>
        </li>
        <li className="nav-item">
          <button className={s.nav__button}>
            AV Score
            <svg
              className={s.svg_button}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333374 0.333374L4.50004 4.50004L8.66671 0.333374H0.333374Z"
                fill="#C0C0C0"
              />
            </svg>
          </button>
        </li>
        <li className="nav-item">
          <button className={s.nav__button}>
            AV Speed
            <svg
              className={s.svg_button}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333374 0.333374L4.50004 4.50004L8.66671 0.333374H0.333374Z"
                fill="#C0C0C0"
              />
            </svg>
          </button>
        </li>
        <li className="nav-item">
          <button className={s.nav__button}>
            All Classes
            <svg
              className={s.svg_button}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333374 0.333374L4.50004 4.50004L8.66671 0.333374H0.333374Z"
                fill="#C0C0C0"
              />
            </svg>
          </button>
        </li>
        <li className="nav-item">
          <button className={s.nav__button}>
            Clear all
            <svg
              className={s.svg_button}
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.333374 0.333374L4.50004 4.50004L8.66671 0.333374H0.333374Z"
                fill="#C0C0C0"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};
