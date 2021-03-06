var dayjs = require('dayjs')

import './css/base.scss';

import './images/sanFran1.jpg';
import './images/planewindow.jpg';
import './images/bwCar.jpg';
import './images/boatView.jpg';

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

submitRequestButton.addEventListener('click', function() {
  (loadUpdatedTripsData());
});
allDestinationsInputSection.addEventListener('click', selectDestinationPriorToBooking);
loginButton.addEventListener('click', validateLoginForm);

let destinations, allTrips, traveler, selectedDestination, bookedTrip, id
const todaysDate = dayjs().format('YYYY/MM/DD');

//Load Data model
function loadDataAfterLogin(id) {
  getAllData(id)
    .then((data) => {
      destinations = new Destination(data[0]);
      allTrips = createAllTrips(data[1], destinations);
      traveler = new Traveler(data[2], allTrips, todaysDate);
      renderAllDestinations(destinations);
      displayAllUserTrips(traveler);
      domUpdateMethods.displayAmountSpentThisYear(traveler)
  });
}

function validateLoginForm(event) {
  event.preventDefault();
  let userIDNumber = parseInt(usernameInput.value.split('traveler')[1]);
  if (usernameInput.value) {
    if (!userIDNumber || userIDNumber < 1 || userIDNumber > 50 || passwordInput.value !== 'travel') {
      domUpdateMethods.displayLoginErrorMessage();
    } else {
      loginScreen.classList.add('hidden');
      mainPage.classList.remove('hidden');
      loadDataAfterLogin(userIDNumber);
    }
  }
}

function updateTravelersTrips(bookedTrip) {
  addPendingTripToTravelersTrips(bookedTrip);
  displayAllUserTrips(traveler);
}

function addPendingTripToTravelersTrips(pendingTrip) {
  traveler.trips.push(pendingTrip)
}

function loadUpdatedTripsData() {
  event.preventDefault()
  bookedTrip = makeNewTripObject();
  postTrip(bookedTrip);
  id = traveler.id
  displayTripCostEstimate(bookedTrip, destinations)
  updateTravelersTrips(bookedTrip);
  loadDataAfterLogin(id);
}

function displayTripCostEstimate(trip, destinations) {
  let requestedTrip = new Trip(trip, destinations);
  const tripCost = document.getElementById('trip_cost');
  tripCost.innerText = `Estimated Trip Cost: $${requestedTrip.calculateTripCost()}`
}

function makeNewTripObject() {
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

function selectDestinationPriorToBooking() {
  event.preventDefault();
  selectedDestination = destinations.findDestination(parseInt(event.target.id));
}

function renderAllDestinations(allDestinations) {
  allDestinations.destinations.forEach((destination) => domUpdateMethods.renderSingleDestination(destination.id, destination.destination, destination.image, destination.alt))
}

function displayAllUserTrips(traveler) {
  traveler.trips.forEach(trip => domUpdateMethods.renderUserTripsByStatus(trip.destinationName, trip.status, trip.picture, trip.altText))
}

function createAllTrips(tripData, destinations) {
  return tripData.trips.map((trip) => new Trip(trip, destinations))
}
