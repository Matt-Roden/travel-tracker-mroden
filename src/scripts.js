var dayjs = require('dayjs')

import './css/base.scss';

import Destination from './Destination'
import Trip from './Trip'
import Traveler from './Traveler'
import { getAllData, postTrip } from './apiCalls';
import domUpdateMethods from './updateDOM'

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

submitRequestButton.addEventListener('click', loadUpdatedTripsData);
allDestinationsInputSection.addEventListener('click', selectDestinationPriorToBooking);
// loginButton.addEventListener('click', );

let destinations, allTrips, traveler, selectedDestination, bookedTrip
const todaysDate = dayjs().format('YYYY/MM/DD');

//Load Data model
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
  });

  const updateTravelersTrips = (bookedTrip) => {
    addPendingTripToTravelersTrips(bookedTrip);
    displayAllUserTrips(traveler);
  }

  const addPendingTripToTravelersTrips = (pendingTrip) => {
    traveler.trips.push(pendingTrip)
  }

function loadUpdatedTripsData(event) {
  event.preventDefault(event)
  bookedTrip = makeNewTripObject();
  postTrip(bookedTrip);
  location.reload();
}

const makeNewTripObject = () => {
  if (selectedDestination) {
    return {
      id: ((allTrips.reverse()[0].id) + 1),
      userID: traveler.id,
      destinationID: selectedDestination.id,
      travelers: travelersInput.value,
      date: dayjs(dateInput.value).format('YYYY/MM/DD'),
      duration: durationInput.value,
      status: 'pending',
      suggestedActivities: []
    }
  }
}

function selectDestinationPriorToBooking(event) {
  event.preventDefault(event);
  selectedDestination = destinations.findDestination(parseInt(event.target.id));
  }

const renderAllDestinations = (allDestinations) => {
  allDestinations.destinations.forEach((destination) => domUpdateMethods.renderSingleDestination(destination.id, destination.destination, destination.image, destination.alt))
}

const displayAllUserTrips = (traveler) => {
  // console.log(traveler.trips, 'trips')
  console.log(traveler.trips, '<><>')
  traveler.trips.forEach(trip => domUpdateMethods.renderUserTripsByStatus(trip.destinationName, trip.status, trip.picture, trip.altText))
}

const createAllTrips = (tripData, destinations)  => {
  return tripData.trips.map((trip) => new Trip(trip, destinations))
}
//Notes:
//Currently posting. Only successfully rerendering the posted trip on page relaod. It shows up in the pending section on bottom of page
