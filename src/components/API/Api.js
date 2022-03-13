export const fetchData = async (searchValue, page = 1) => {
  const response = await fetch(
    `https://test-task-j.herokuapp.com/data?page=${page}&size=10&search=${searchValue}`
  );
  const data = await response.json();

  return data;
};
