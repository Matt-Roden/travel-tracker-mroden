class Trip {
  constructor(trip, destinations) {
    this.id = trip.id;
    this.userID = trip.userID;
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
  }
  calculateTripCost() {
    //1) ((this.dailyLodgingCost + this.flightCostPerTraveler) * this.travelersAmount) + 10% fee
    // will probably need to make a variable that holds the 10% fee amount after getting initial pre-fee cost
    // can then add this value to the output of the cost without the fee and return this number
  }
  determineTripStatus() {
    // if the status is not pending and the trip date is less than today's date - status = past
    // if the status is not pending and the trip date is equal to todays date - status = current
  }
}
export default Trip;
