import { HeaderOnPage } from './API/Header/Header';
import { CSVLink, CSVDownload } from 'react-csv';
import { SecondHeader } from './SecondHeader/SecondHeader';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { Main } from './Main/Main';
import Dropdown from './Dropdown/Dropdown';
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
      `https://test-task-j.herokuapp.com/data?page=${count}&size=10&sortBy=${type}&sortDir=${dir}`
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
        color: '#777777',
        width: '1360px',
        margin: '0 auto',
        fontFamily: 'Rubik, sans-serif',
      }}
    >
      <HeaderOnPage />
      <SecondHeader />
      <SearchBar onSubmit={formSubmitHandler} />
      {students && (
        <CSVLink className={s.csv_downloader} data={students.data}>
          <svg
            className={s.svg__downloader}
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.99992 0.5L0.333252 5.16667H2.99992V9.16667H6.99992V5.16667H9.66659L4.99992 0.5ZM5.66659 3.83333V7.83333H4.33325V3.83333H3.55325L4.99992 2.38667L6.44659 3.83333H5.66659ZM0.333252 10.5H9.66659V11.8333H0.333252V10.5Z"
              fill="#C0C0C0"
            />
          </svg>
          Export CSV
        </CSVLink>
      )}
      {students && <Main items={students.data} />}
      {/* <Dropdown /> */}
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
