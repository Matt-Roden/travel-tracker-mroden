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
  });

  it('should have an ID', () => {

  });

  it('should have a traveler ID', () => {

  });

  it('should have a destination ID', () => {

  });

  it('should know the amount of travelers', () => {

  });

  it('should have a start date', () => {

  });

  it('should have a duration', () => {

  });

  it('should have a status', () => {

  });

  it('should have some suggested actvities', () => {

  });

  it('should know the name of the destination', () => {

  });

  it('should know the daily lodging cost of the destination', () => {

  });

  it('should know the cost of a flight per person for the destination', () => {

  });

  it('should have an image of the destination', () => {

  });

  it('should calculate the total trip cost', () => {

  });

}); //END TEST
