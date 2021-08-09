var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Destination from './Destination'
import Trip from './Trip'
import Traveler from './Traveler'
import getAllData from './apiCalls';
import domUpdateMethods from './updateDOM'

// const todaysDate = (dayjs().format('YYYY/MM/DD'))
// console.log(todaysDate, 'today');


// console.log(date, 'date<><>')
let destinations, allTrips, traveler, alltravelers

getAllData()
  .then((data) => {
    destinations = new Destination(data[0]);
    console.log(destinations);
    allTrips = createAllTrips(data[1], destinations);
    // console.log(allTrips)
    traveler = new Traveler(data[2], allTrips);
    // console.log(traveler)
    renderAllDestinations(destinations);
  });

const renderAllDestinations = (allDestinations) => {
  allDestinations.destinations.forEach((destination) => domUpdateMethods.renderSingleDestination(destination.id, destination.destination, destination.image, destination.alt))


  //domUpdateMethods.renderSingleDestination()
}

const createAllTrips = (tripData, destinations)  => {
  return tripData.trips.map((trip) => new Trip(trip, destinations))
}
