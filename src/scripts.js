var dayjs = require('dayjs')

import './css/base.scss';

import Destination from './Destination'
import Trip from './Trip'
import Traveler from './Traveler'
import { getAllData, postTrip } from './apiCalls';
import domUpdateMethods from './updateDOM'

let destinations, allTrips, traveler, selectedDestination
const todaysDate = dayjs().format('YYYY/MM/DD');

const requestForm = document.getElementById('request_form')
const submitRequestButton = document.getElementById('submit_btn');
const dateInput = document.querySelector('#date_input');
const durationInput = document.querySelector('#duration_input');
const travelersInput = document.querySelector('#travelers_input');
const allDestinationsInputSection = document.querySelector('#destination_selector');
const calculateCostButton = document.getElementById('calc_cost_button');
const loginButton = document.getElementById('login_submit');
const usernameInput = document.getElementById('username_input');
const passwordInput = document.getElementById('password_input');
const loginScreen = document.getElementById('login_form');
const mainPage = document.getElementById('main_page');



// submitRequestButton.addEventListener('click', );
allDestinationsInputSection.addEventListener('click', (event) => {
  selectDestinationPriorToBooking(event);
});
// calculateCostButton.addEventListener('click', );
// dateInput.addEventListener('click', );
// loginButton.addEventListener('click', );
// requestForm.addEventListener('submit', (event) => {
//   getFormData(event);
// })

getAllData()
  .then((data) => {
    destinations = new Destination(data[0]);
    // console.log(destinations);
    allTrips = createAllTrips(data[1], destinations);
    // console.log(allTrips)
    traveler = new Traveler(data[2], allTrips, todaysDate);
    // console.log(traveler)
    renderAllDestinations(destinations);
    displayAllUserTrips(traveler);
    domUpdateMethods.displayAmountSpentThisYear(traveler)
    // console.log(traveler.id, 'id')
    // postTrip(allTrips[0])
    requestForm.addEventListener('submit', (event) => {
      getFormData(event);
    })

  });


//Packaging my post object
const getFormData = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const newTrip = {
  id: ((allTrips.reverse()[0].id) + 1),
  userID: traveler.id,
  destinationID: formData.get(event.target),
  travelers: JSON.parse(formData.get('travelers-selector')),
  date: formData.get('date-selector'),
  duration: JSON.parse(formData.get('duration-selector')),
  // suggestedActivites: [];
  }
  console.log(newTrip);
  event.target.reset();
}


  // {
  //   "id": 11,
  //   "userID": 5,
  //   "destinationID": 10,
  //   "travelers": 6,
  //   "date": "2021/08/08",
  //   "duration": 17,
  //   "status": "approved",
  //   "suggestedActivities": []
  // }

const selectDestinationPriorToBooking = (event) => {
    event.preventDefault()
    selectedDestination = destinations.findDestination(parseInt(event.target.id));
  }

const renderAllDestinations = (allDestinations) => {
  allDestinations.destinations.forEach((destination) => domUpdateMethods.renderSingleDestination(destination.id, destination.destination, destination.image, destination.alt))
}

const displayAllUserTrips = (traveler) => {
  // console.log(traveler.trips, 'trips')
  traveler.trips.forEach(trip => domUpdateMethods.renderUserTripsByStatus(trip.destinationName, trip.status, trip.picture, trip.altText))
}

const createAllTrips = (tripData, destinations)  => {
  return tripData.trips.map((trip) => new Trip(trip, destinations))
}
