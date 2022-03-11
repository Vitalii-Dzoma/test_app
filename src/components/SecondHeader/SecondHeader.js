import { useState } from 'react';
import s from './SecondHeader.module.css';
export const SecondHeader = () => {
  return (
    <div className={s.secondHeader}>
      <ul className={s.secondHeaderList}>
        <li className="nav-item">
          <button className="nav__button">Show all</button>
        </li>
        <li className="nav-item">
          <button className="nav__button">All grades</button>
        </li>
        <li className="nav-item">
          <button className="nav__button">All classes</button>
        </li>
        <li className="nav-item">
          <button className="nav__button">AV Score</button>
        </li>
        <li className="nav-item">
          <button className="nav__button">AV Speed</button>
        </li>
        <li className="nav-item">
          <button className="nav__button">All Classes</button>
        </li>
        <li className="nav-item">
          <button className="nav__button">Clear all</button>
        </li>
      </ul>
    </div>
  );
};
