class Trip {
  constructor(trip, destinations) {
    // console.log(destinations, ',.,,.,')
    this.id = trip.id;
    this.travelerID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelersAmount = trip.travelers;
    this.startDate = trip.date;
    this.duration = trip.duration;
    this.status = trip.status || 'pending';
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
  // determineTripStatus() {
  //   // if the status is not pending and the trip date is less than today's date - status = past
  //   // if the status is not pending and the trip date is equal to todays date - status = current
  // }
}
export default Trip;
