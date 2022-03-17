import { fetchData } from 'components/API/Api';
import { useState } from 'react';
import s from './Main.module.css';

export const Main = ({ items }) => {
  const [visible, setVisible] = useState(false);
  const [indexActivEl, setIndexActivEL] = useState(0);

  const setActiveIdx = index => {
    setIndexActivEL(index);
    setVisible(!visible);
  };

  return (
    <table
      className={s.scores}
      style={{
        fontFamily: 'Rubik',
      }}
    >
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
          <tr
            key={index}
            onClick={() => setActiveIdx(index)}
            className={s.Dropdown}
          >
            <div className={s.dropContainer}>
              <td>{item.name}</td>
              <td>{item.id}</td>
              <td>{item.class}</td>
              <td>{item.score}</td>
              <td>{item.speed}</td>
              <td>{item.parents.join(' ')}</td>
            </div>

            {index === indexActivEl && visible ? (
              <section className={s.dropContainer}>
                <div className="name_block">
                  <span>Student:{item.name}</span>
                  <span>ID:{item.id}</span>
                </div>
                <div>
                  <label>
                    All concepts
                    <input type="select" />
                  </label>

                  <label>
                    All score
                    <input type="select" />
                  </label>
                  <label>
                    All speed
                    <input type="select" />
                  </label>
                  <label>
                    Select period
                    <input type="text" />{' '}
                  </label>
                </div>
                <div>
                  <ul>
                    Score
                    <li>90%+ accuracy</li>
                    <li>80 - 89% accuracy</li>
                    <li>50 - 79% accuracy</li>
                    <li>below 50% accuracy</li>
                  </ul>
                  <ul>
                    Speed
                    <li>above expected</li>
                    <li>as expected</li>
                    <li>below expected</li>
                  </ul>
                </div>
                <table>
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
