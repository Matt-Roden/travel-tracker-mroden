import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip'
import Destination from '../src/Destination'
import Traveler from '../src/Traveler'
import sampleData from './test-data'

describe('Traveler', () => {
  let destinations, allTrips, traveler1, traveler2;
  let destinationsData = sampleData.destinations;
  let tripsData = sampleData.trips;
  let travelersData = sampleData.travelers;
console.log(tripsData, '<><><>')

  beforeEach(() => {
    destinations = new Destination(destinationsData);
    traveler1 = new Traveler(travelersData[0], tripsData);
    traveler2 = new Traveler(travelersData[1], tripsData);
    console.log(tripsData, 'yooo<><>')
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

  it.only('should know all of it\'s trips', () => {
    console.log(traveler1.id)
    expect(traveler1.trips.length).to.equal(6);

  })

  it('should calculate the total spent on trips this year', () => {

  })

});
