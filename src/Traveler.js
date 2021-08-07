class Traveler {
  constructor(traveler, tripsData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.trips = tripsData.filter((trip) => trip.userID === this.id); //will be a filtered array of all trip objects that have the same userID as this traveler and the date is prior to today's date
    // this.upcomingTrips = tripsData.filter((trip) => trip.id === this.id && trip.status === 'pending');// will be filtered array of all trip objects that have the same userID as this traveler and the date is later than today's date
    // this.currentTrips = [] // will be filtered array of all trip objects that have the same userID as this traveler and the date is the same as today's date
    // this.pendingTrips = [] // will be filtered array of all trip objects that have the same userID as this traveler and the status is pending
  }
  calculateTotalSpentThisYear(year) {
    console.log(this.trips)
  }
}
export default Traveler;
