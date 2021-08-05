import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler'
import Destination from '../src/Destination'
import Trip from '../src/Trip'
import sampleData from './test-data'

describe('Traveler', () => {
  let destinations, allTrips, traveler1, traveler2

  beforeEach(() => {
    destinations = new Destination(sampleData.destinations);
    allTrips = samppleData.trips.map((trip) => new Trip(trip, destinations));
    traveler1 = new Traveler(sampleData.travelers[0], trips);
    traveler2 = new Traveler(sampleData.travelers[1], trips);
  });

  it('should be a function', () => {
    
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
