const getData = (suffix) => {
  return fetch(`http://localhost:3001/api/v1/${suffix}`)
    .then((response) => response.json());
};

const getAllData = () => {
  return Promise.all([
    getData('destinations'),
    getData('trips'),
    getData('travelers/44')
    // getData('travelers'),
  ]);
};
export default getAllData;
