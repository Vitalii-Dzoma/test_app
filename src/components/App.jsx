import { HeaderOnPage } from "./API/Header/Header";
import { SecondHeader } from "./SecondHeader/SecondHeader";
import { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { Main } from "./Main/Main";
import { fetchData } from "./API/Api";
export const App = () => {

const [count, setCount] = useState(1)
  const [students, setStudents] = useState(null)
  

  useEffect(() => {
    console.log("Запускается эффект")
    async function fetchFirst() {
      const response = await fetch('https://test-task-j.herokuapp.com/data?page=1&size=10')
      console.log(response)
      const dataGeneral = await response.json();
      
      console.log(dataGeneral)
      setStudents(dataGeneral)
      return students;
    }
    fetchFirst()
  }, [])
const formSubmitHandler = search => {
       setCount(1);
  
    fetchData(search, count)
      .then(data => setStudents(data))
      // .finally(() => this.setState({ loading: false}));
    
  setCount(count + 1);
  
    
    return students;

  };
  

  return (
    <div
      style={{
        display: 'block',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <HeaderOnPage />
      <SecondHeader />
      <SearchBar onSubmit={formSubmitHandler} />
      {students&&<Main items={students.data}/> }
    </div>
  );
};
