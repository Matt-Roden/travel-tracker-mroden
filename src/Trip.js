import * as dayjs from 'dayjs';
var isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);

class Trip {
  constructor(trip, destinations) {
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

    if(dayjs(date).isBetween(this.startDate, endDate, null, '[]') && this.status !== 'pending') {
      this.status = 'current';
    }
    if(dayjs(date).isAfter(this.startDate) && dayjs(date).isAfter(endDate) && this.status !== 'pending') {
      this.status = 'past';
    }
    if(dayjs(date).isBefore(this.startDate) && this.status !== 'pending') {
      this.status = 'upcoming'
    }
  }
}
export default Trip;
