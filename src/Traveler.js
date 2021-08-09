class Traveler {
  constructor(traveler, tripsData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.trips = tripsData.filter((trip) => trip.travelerID === this.id);
    this.upcomingTrips = this.trips.reduce((accArr, trip) => {
      if(trip.determineTripStatus(trip.startDate)) {
        accArr.push(trip)
      }
      return accArr
    }, []);
    this.pastTrips = this.trips.reduce((accArr, trip) => {
      if(trip.determineTripStatus(trip.startDate)) {
        accArr.push(trip)
      }
      return accArr
    }, []);
    this.currentTrips = this.trips.reduce((accArr, trip) => {
      if(trip.determineTripStatus(trip.startDate)) {
        accArr.push(trip)
      }
      return accArr
    }, []);
    this.pendingTrips = this.trips.reduce((accArr, trip) => {
      if(trip.determineTripStatus(trip.startDate)) {
        accArr.push(trip)
      }
      return accArr
    }, []);
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
