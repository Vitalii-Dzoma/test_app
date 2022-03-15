import { HeaderOnPage } from './API/Header/Header';
import { SecondHeader } from './SecondHeader/SecondHeader';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { Main } from './Main/Main';
import { fetchData } from './API/Api';
import Pagination from 'rc-pagination';
import s from './s.module.css';
import { Sorting } from './Sorting/Sorting';
export const App = () => {
  const countPerPage = 10;
  const [count, setCount] = useState(1);
  const [students, setStudents] = useState(null);
  const [dir, SetDir] = useState(1);

  useEffect(() => {
    console.log('Запускается эффект');
    async function fetchFirst() {
      const response = await fetch(
        'https://test-task-j.herokuapp.com/data?page=1&size=10'
      );

      const dataGeneral = await response.json();

      setStudents(dataGeneral);
      return students;
    }
    fetchFirst();
  }, []);

  const updatePage = p => {
    setCount(p);
    async function fetchNext() {
      const response = await fetch(
        `https://test-task-j.herokuapp.com/data?page=${p}&size=10`
      );

      const dataGeneral = await response.json();

      setStudents(dataGeneral);
      return students;
    }

    const to = countPerPage * p;
    const from = to - countPerPage;
    fetchNext();
  };

  async function sortData(type) {
    const response = await fetch(
      `https://test-task-j.herokuapp.com/data?page=1&size=10&sortBy=${type}&sortDir=${dir}`
    );

    const dataGeneral = await response.json();
    if (dir === 1) {
      SetDir(-1);
    } else {
      SetDir(1);
    }
    setStudents(dataGeneral);
    return students;
  }

  const formSubmitHandler = search => {
    setCount(1);

    fetchData(search, count).then(data => setStudents(data));
    // .finally(() => this.setState({ loading: false}));

    setCount(count + 1);

    return students;
  };

  setTimeout(
    () => console.log(countPerPage),
    console.log(count),

    2000
  );

  return (
    <div
      style={{
        display: 'block',
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#010101',
        width: '1200px',
        margin: '0 auto',
      }}
    >
      <HeaderOnPage />
      <SecondHeader />
      <SearchBar onSubmit={formSubmitHandler} />
      {students && <Main items={students.data} />}
      {students && (
        <Pagination
          className={s.paginationList}
          pageSize={countPerPage}
          current={count}
          onChange={updatePage}
          total={20}
        />
      )}
      <Sorting onSort={sortData} />
    </div>
  );
};
