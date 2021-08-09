import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination'
import Trip from '../src/Trip'
import sampleData from './test-data'

describe('Trip', () => {
let destinations, trips, trip1, trip2
let destinationsData = sampleData;
let tripsData = sampleData.trips;

  beforeEach(() => {
    destinations = new Destination(destinationsData);
    trips = tripsData.map((trip) => new Trip(trip, destinations));
    trip1 = trips[0];
    trip2 = trips[1];
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should have an ID', () => {
    expect(trip1.id).to.equal(1);
    expect(trip2.id).to.equal(2);
  });

  it('should have a traveler ID', () => {
    expect(trip1.travelerID).to.equal(1);
    expect(trip2.travelerID).to.equal(1);
  });

  it('should have a destination ID', () => {
    expect(trip1.destinationID).to.equal(1);
    expect(trip2.destinationID).to.equal(2);
  });

  it('should know the amount of travelers', () => {
    expect(trip1.travelersAmount).to.equal(1);
    expect(trip2.travelersAmount).to.equal(5);
  });

  it('should have a start date', () => {
    expect(trip1.startDate).to.equal('2019/09/16');
    expect(trip2.startDate).to.equal('2020/10/04');
  });

  it('should have a duration', () => {
    expect(trip1.duration).to.equal(8);
    expect(trip2.duration).to.equal(18);
  });

  it('should have a status', () => {
    expect(trip1.status).to.equal('approved');
    expect(trip2.status).to.equal('pending');
  });

  it('should have some suggested actvities', () => {
    expect(trip1.suggestedActivities).to.deep.equal([]);
    expect(trip2.suggestedActivities).to.deep.equal([]);
  });

  it('should know the name of the destination', () => {
    expect(trip1.destinationName).to.equal('Lima, Peru');
    expect(trip2.destinationName).to.equal('Stockholm, Sweden');
  });

  it('should know the daily lodging cost of the destination', () => {
    expect(trip1.dailyLodgingCost).to.equal(70);
    expect(trip2.dailyLodgingCost).to.equal(100);
  });

  it('should know the cost of a flight per person for the destination', () => {
    expect(trip1.flightCostPerTraveler).to.equal(400);
    expect(trip2.flightCostPerTraveler).to.equal(780);
  });

  it('should have an image of the destination', () => {
    expect(trip1.picture).to.equal('https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
    expect(trip2.picture).to.equal('https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  });

  it('should have alt text for the image', () => {
    expect(trip1.altText).to.equal('overview of city buildings with a clear sky');
    expect(trip2.altText).to.equal('city with boats on the water during the day time');
  })

  it('should calculate the total trip cost', () => {
    expect(trip1.calculateTripCost()).to.equal(1056);
    expect(trip2.calculateTripCost()).to.equal(14190);
  });

  it.only('should assign a new status to the current traveler\'s trips', () => {
    const trip3 = trips[11]
    const trip4 = trips[12]
    trip3.determineTripStatus('2021/08/09');
    trip1.determineTripStatus('2021/08/09');
    trip4.determineTripStatus('2021/08/09');
    expect(trip3.status).to.equal('current');
    expect(trip1.status).to.equal('past');
    expect(trip4.status).to.equal('upcoming');
  });

}); //END TEST
