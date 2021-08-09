class Traveler {
  constructor(traveler, tripsData, date) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.trips = tripsData.filter((trip) => trip.travelerID === this.id);
    this.updateTrips = this.trips.forEach((trip) => trip.determineTripStatus(date));
  }
  calculateTotalSpentThisYear(year) {
    const nonPendingTrips = this.trips.filter((trip) => trip.status !== 'pending');
    const tripsThisYear = nonPendingTrips.filter((trip) => trip.startDate.includes(year));
    const totalSpentThisYear = tripsThisYear.reduce((accNum, trip) => {
      accNum += trip.calculateTripCost();
      return accNum
    }, 0)
    return `You have spent $${totalSpentThisYear} on trips so far this year!`
  }
}
export default Traveler;
