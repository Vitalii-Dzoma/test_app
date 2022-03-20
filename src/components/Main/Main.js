import { fetchData } from 'components/API/Api';
import { useState } from 'react';
import s from './Main.module.css';

export const Main = ({ items, onSort }) => {
  const [visible, setVisible] = useState(false);
  const [indexActivEl, setIndexActivEL] = useState(0);
  const setActiveIdx = index => {
    setIndexActivEL(index);
    setVisible(!visible);
  };

  const colorDeterminateScore = elem => {
    if (elem >= '50%' && elem <= '79%') {
      return '#E2B534';
    } else if (elem >= '80%' && elem <= '89%') {
      return '#0F9D58';
    } else if (elem >= '90%') {
      return '#4285F4';
    } else if (elem <= '50%') {
      return '#DB4437';
    }
  };

  const colorDeterminateSpeed = elem => {
    if (elem === 'Above Expected') {
      return '#4285F4';
    } else if (elem === 'As Expected') {
      return '#0F9D58';
    } else if (elem === 'Below Expected') {
      return '#DB4437';
    }
  };

  return (
    <table className={s.scores}>
      <thead>
        <tr>
          <th className={s.tRows} onClick={() => onSort('name')}>
            Name
          </th>
          <th className={s.tRows}>ID</th>
          <th className={s.tRows} onClick={() => onSort('class')}>
            Class
          </th>
          <th className={s.tRows} onClick={() => onSort('score')}>
            Av.Score,%
          </th>
          <th className={s.tRows} onClick={() => onSort('speed')}>
            Av.Speed
          </th>
          <th className={s.tRows}>Parents</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={index}
            onClick={() => setActiveIdx(index)}
            className={s.Dropdown}
          >
            <div className={s.dropDownMenu}>
              <td className={s.tableName}>{item.name}</td>
              <td className={s.tableId}>{item.id}</td>
              <td className={s.tableClass}>{item.class}</td>
              <td
                className={s.tableScore}
                style={{ color: colorDeterminateScore(item.score) }}
              >
                {item.score}
              </td>
              <td
                className={s.tableSpeed}
                style={{ color: colorDeterminateSpeed(item.speed) }}
              >
                {item.speed}
              </td>
              <td className={s.tableParents}>{item.parents.join(' ')}</td>
            </div>

            {index === indexActivEl && visible ? (
              <section className={s.dropContainer}>
                <p className={s.foldedTableTitle}>
                  Student:
                  <span className={s.foldedTableTitleName}>{item.name}</span>
                  ID:<span className={s.foldedTableTitleName}>{item.id}</span>
                </p>
                <div className={s.selectContainer}>
                  <select className={s.inputDropdown}>
                    {' '}
                    <option>All concepts</option>
                    <option></option>
                  </select>
                  <select className={s.inputDropdown}>
                    {' '}
                    <option>All score</option>
                    <option></option>
                  </select>
                  <select className={s.inputDropdown}>
                    {' '}
                    <option>All speed</option>
                    <option></option>
                  </select>

                  <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Select period"
                  />
                </div>
                <div>
                  <ul className={s.scoreList}>
                    Score
                    <li className={s.scoreItem}>90%+ accuracy</li>
                    <li className={s.scoreItem}>80 - 89% accuracy</li>
                    <li className={s.scoreItem}>50 - 79% accuracy</li>
                    <li className={s.scoreItem}>below 50% accuracy</li>
                  </ul>
                  <ul className={s.speedList}>
                    Speed
                    <li className={s.speedItem}>above expected</li>
                    <li className={s.speedItem}>as expected</li>
                    <li className={s.speedItem}>below expected</li>
                  </ul>
                </div>
                <table className={s.foldedTable}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Test Label</th>
                      <th>Score</th>
                      <th>Speed</th>
                      <th>Total Q-ns</th>
                      <th>Exp. Speed</th>
                      <th>Concept</th>
                      <th>Concept</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.tests[0].label}</td>
                      <td>{item.tests[0].score}</td>
                      <td>{item.tests[0].speed}</td>
                      <td>{item.tests[0].total}</td>
                      <td>{item.tests[0].expSpeed}</td>
                      <td>{item.tests[0].concept}</td>
                      <td>{item.tests[0].date}</td>
                    </tr>
                    <tr>
                      <td>{item.tests[1].label}</td>
                      <td>{item.tests[1].score}</td>
                      <td>{item.tests[1].speed}</td>
                      <td>{item.tests[1].total}</td>
                      <td>{item.tests[1].expSpeed}</td>
                      <td>{item.tests[1].concept}</td>
                      <td>{item.tests[1].date}</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            ) : (
              console.log('none')
            )}
          </tr>
        ))}
        {/* {visible && (
          <tr key={'Выпадайка'} className={s.Dropdown__menu}>
            <td>{'Console'}</td>
            <td>{'Console'}</td>
            <td>{'Console'}</td>
            <td>{'Console'}</td>
            <td>{'Console'}</td>
            <td>{'Console'}</td>
          </tr>
        )} */}
      </tbody>
    </table>
  );
};
