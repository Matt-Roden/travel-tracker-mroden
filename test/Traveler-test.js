import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip'
import Destination from '../src/Destination'
import Traveler from '../src/Traveler'
import sampleData from './test-data'

describe('Traveler', () => {
  let destinations, trips, allTrips, traveler1, traveler2;
  let destinationsData = sampleData.destinations;
  let tripsData = sampleData.trips;
  let travelersData = sampleData.travelers;

  beforeEach(() => {
    destinations = new Destination(destinationsData);
    trips = tripsData.map((trip) => new Trip(trip, destinations));
    traveler1 = new Traveler(travelersData[0], trips);
    traveler2 = new Traveler(travelersData[1], trips);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should have an ID', () => {
    expect(traveler1.id).to.equal(1)
    expect(traveler2.id).to.equal(2)
  })

  it('should have a name', () => {
    expect(traveler1.name).to.equal('Ham Leadbeater')
    expect(traveler2.name).to.equal('Rachael Vaughten')
  })

  it('should have a type', () => {
    expect(traveler1.type).to.equal('relaxer')
    expect(traveler2.type).to.equal('thrill-seeker')
  })

  it('should know all of it\'s trips', () => {
    expect(traveler1.trips.length).to.equal(6);
  })

  it('should calculate the total spent on trips this year', () => {
    expect(traveler1.calculateTotalSpentThisYear('2021')).to.equal('You have spent $9900 on trips so far this year!')
  })

});
