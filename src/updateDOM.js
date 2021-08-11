var dayjs = require('dayjs')

const todaysDate = (dayjs().format('YYYY/MM/DD'))
const thisYear = dayjs().format('YYYY')

const domUpdateMethods = {

  renderSingleDestination(id, location, imageURL, altText) {
    const destinationsArea = document.getElementById('destination_selector')
    const destinationCardHTML = `<div class="request-card-wrapper">
      <img src="${imageURL}" alt="${altText}" class="destination-card-image">
      <p class="destination-card-location">${location}</p>
      <button class="request-button" type="checked" name="request-button" id="${id}" required>Request</button>
    </div>`;
    destinationsArea.insertAdjacentHTML('afterbegin', destinationCardHTML);
  },
  renderUserTripsByStatus(location, status, imageURL, altText) {
    const currentTripsArea = document.getElementById('current_trips');
    const upcomingTripsArea = document.getElementById('upcoming_trips');
    const pastTripsArea = document.getElementById('past_trips');
    const pendingTripsArea = document.getElementById('pending_trips');

    const userTripsCardHTML = `<div class="user-card-wrapper">
      <img src="${imageURL}" alt="${altText}" class="destination-card-image">
      <p class="trips-card-location">${location}</p>
      <p class="trips-card-status">${status}</p>
    </div>`;

    if(status === 'current') {
      currentTripsArea.insertAdjacentHTML('afterbegin', userTripsCardHTML)
    }
    if(status === 'upcoming') {
      upcomingTripsArea.insertAdjacentHTML('afterbegin', userTripsCardHTML)
    }
    if(status === 'past') {
      pastTripsArea.insertAdjacentHTML('afterbegin', userTripsCardHTML)
    }
    if(status === 'pending') {
      pendingTripsArea.insertAdjacentHTML('afterbegin', userTripsCardHTML)
    }
  },
  displayAmountSpentThisYear(traveler) {
    const amountSpent = document.getElementById('yearly_amount_spent');

    amountSpent.innerText = `${traveler.calculateTotalSpentThisYear(thisYear)}`
  },
  displayLoginErrorMessage() {
    const errorMessage = document.querySelector('.login-header');
    errorMessage.innerText = 'Oops! Looks like your Username or Password is incorrect, please try again.';
  },
  displayTripCostEstimate(bookedTrip) {
    const tripCost = document.getElementById('trip_cost');
    tripCost.innerText = ``
  }

}; // END domUpdates
export default domUpdateMethods;
