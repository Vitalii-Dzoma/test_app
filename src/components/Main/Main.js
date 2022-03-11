import { fetchData } from 'components/API/Api';
import { useState } from 'react';
import s from './Main.module.css';

export const Main = ({ items }) => {
  return (
    <table className={s.scores}>
      <thead>
        <tr>
          <th className={s.tRows}>Name</th>
          <th className={s.tRows}>ID</th>
          <th className={s.tRows}>Class</th>
          <th className={s.tRows}>Av.Score,%</th>
          <th className={s.tRows}>Av.Speed</th>
          <th className={s.tRows}>Parents</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.class}</td>
            <td>{item.score}</td>
            <td>{item.speed}</td>
            <td>{item.parents}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
