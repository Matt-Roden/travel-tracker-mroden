import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination'
import Trip from '../src/Trip'
import sampleData from './test-data'

describe.only('Trip', () => {
let destinations, trips
let destinationsData = sampleData.destinations;
let tripsData = sampleData.trips;

  beforeEach(() => {
    destinations = new Destination(destinationsData);
    trips = tripsData.map((trip) => new Trip(trip, destinations));
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  })
}); //END TEST
