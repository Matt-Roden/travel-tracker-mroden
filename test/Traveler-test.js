import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler'
import Destination from '../src/Destination'
import Trip from '../src/Trip'
import sampleData from './test-data'

describe('Traveler', () => {
  let destinations, allTrips, traveler1, traveler2;
  let destinationsData = sampleData.destinations;
  let tripsData = sampleData.trips;
  let travelersData = sampleData.travelers;

  beforeEach(() => {
    destinations = new Destination(destinations);
    allTrips = tripsData.map((trip) => new Trip(trip, destinations));
    traveler1 = new Traveler(travelersData[0], allTrips);
    traveler2 = new Traveler(travelersData[1], allTrips);
  });

  it.only('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should have an ID', () => {

  })

  it('should have a name', () => {

  })

  it('should have a type', () => {

  })

  it('should know all past trips', () => {

  })

  it('should know all upcoming trips', () => {

  })

  it('should know all current trips', () => {

  })

  it('should know all pending trips', () => {

  })

  it('should calculate the total spent on trips this year', () => {

  })

});
