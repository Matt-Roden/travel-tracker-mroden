const getData = (suffix) => {
  return fetch(`http://localhost:3001/api/v1/${suffix}`).then((response) => response.json());
};

const getAllData = () => {
  return Promise.all([
    getData('destinations'),
    // getData('trips'),
    // getData('travelers'),
    // getData('travelers/1'),
  ]);
};
export default getAllData;
