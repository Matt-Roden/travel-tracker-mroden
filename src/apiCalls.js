const getData = (suffix) => {
  return fetch(`http://localhost:3001/api/v1/${suffix}`)
    .then((response) => response.json());
};

const getTravelerData = (id) => {
  id = `${id}`;
  const baseURL = 'http://localhost:3001/api/v1/travelers/';
  return fetch(`${baseURL}${id}`).then((response) => response.json());
};

const getAllData = (id) => {
  return Promise.all([
    getData('destinations'),
    getData('trips'),
    getTravelerData(id)
    // getData('travelers'),
  ]);
};
export default getAllData;
