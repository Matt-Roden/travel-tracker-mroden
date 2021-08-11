const getData = (suffix) => {
  return fetch(`http://localhost:3001/api/v1/${suffix}`)
    .then((response) => response.json())
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
  ]);
};

const postTrip = (tripRequestObject) => {
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tripRequestObject),
  })
  .then(response => checkForError(response))
  .then(data => console.log(data, 'DATA<><><>'))
}

const checkForError = (response) => {
  if (!response.ok) {
    throw new Error("Please make sure that all fields are filled out and that the POST path is correct");
  } else {
    return response.json()
  }
}

export { getAllData, postTrip };
