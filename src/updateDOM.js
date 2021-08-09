import { destinations, allTrips, traveler } from './scripts.js'

var dayjs = require('dayjs')

const todaysDate = (dayjs().format('YYYY/MM/DD'))
console.log(todaysDate, 'todaybutt');



const domUpdateMethods = {

  renderSingleDestination(id, location, imageURL, altText) {
    const destinationsArea = document.getElementById('destination_selector')
    // console.log(destinationsArea, '<><>')
    const destinationCardHTML = `<div class="card-wrapper">
      <img src="${imageURL}" alt="${altText}" class="destination-card-image">
      <p class="destination-card-location">${location}</p>
      <button class="request-button" type="checked" name="request-button" id="${id}">Request</button>
    </div>`;
    destinationsArea.insertAdjacentHTML('afterbegin', destinationCardHTML);

  }

}; // END domUpdates
export default domUpdateMethods;
