import * as dayjs from 'dayjs';
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

class Trip {
  constructor(trip, destinations) {
    // console.log(destinations, ',.,,.,')
    this.id = trip.id;
    this.travelerID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelersAmount = trip.travelers;
    this.startDate = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
    this.destinationName = destinations.findDestination(trip.destinationID).destination;
    this.dailyLodgingCost = destinations.findDestination(trip.destinationID).estimatedLodgingCostPerDay;
    this.flightCostPerTraveler = destinations.findDestination(trip.destinationID).estimatedFlightCostPerPerson;
    this.picture = destinations.findDestination(trip.destinationID).image;
    this.altText = destinations.findDestination(trip.destinationID).alt;
  }
  calculateTripCost() {
    const preFeeAmt = ((this.dailyLodgingCost * this.duration) + this.flightCostPerTraveler) * this.travelersAmount;
    const fee = preFeeAmt * 0.1;
    return preFeeAmt + fee;
  }
  determineTripStatus(date) {
    let endDate = dayjs(this.startDate).add(this.duration, 'day').format('YYYY/MM/DD');
    console.log(this.startDate, 'startDate<><>')
    console.log(endDate, 'EndDate<><>')
    console.log(date, 'date')
    if(dayjs(date).isBetween(this.startDate, endDate, null, '[]') && this.status !== 'pending') {
      return this.status = 'current';
    }

  }
}
export default Trip;
