class Traveler {
  constructor(traveler, tripsData) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.type = traveler.travelerType;
    this.trips = tripsData.filter((trip) => trip.travelerID === this.id); //will be a filtered array of all trip objects that have the same userID as this traveler and the date is prior to today's date
    //FIX 👇
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
    //((trip) => trip.determineTripStatus(trip.startDate));// will be filtered array of all trip objects that have the same userID as this traveler and the date is later than today's date
    // this.currentTrips = this.trips.forEach((trip) => trip.determineTripStatus(trip.startDate)); // will be forEached array of all trip objects that have the same userID as this traveler and the date is the same as today's date
    // this.pendingTrips = this.trips.forEach((trip) => trip.determineTripStatus(trip.startDate));
    // this.pastTrips = this.trips.forEach((trip) => trip.determineTripStatus(trip.startDate)); // will be filtered array of all trip objects that have the same userID as this traveler and the status is pending
    //need to fix these 👆 coming back as undefined
    //don't seem to be assigning the right status, need to comb through data again. WHY???
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
