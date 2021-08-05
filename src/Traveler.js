class Traveler {
  constructor(traveler, tripsData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.pastTrips = []; //will be a filtered array of all trip objects that have the same userID as this traveler and the date is prior to today's date
    this.upcomingTrips = [] // will be filtered array of all trip objects that have the same userID as this traveler and the date is later than today's date
    this.currentTrips = [] // will be filtered array of all trip objects that have the same userID as this traveler and the date is the same as today's date
    this.pendingTrips = [] // will be filtered array of all trip objects that have the same userID as this traveler and the status is pending
  }
  calculateTotalSpentThisYear() {
    // will filter all of the current, past, and upcoming trips for this traveler that are in 2021, and then add the costs up + 10% fee
  }
}
