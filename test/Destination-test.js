import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination'
import sampleData from './test-data'

describe.only('Destinations', () => {
let destinations
let destinationsData = sampleData.destinations;

  beforeEach(() => {
    destinations = new Destination(destinationsData)
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function')
  });

  it('should find a destination by an ID', () => {
    expect(destinations.findDestination(1)).to.deep.equal({
      "id": 1,
      "destination": "Lima, Peru",
      "estimatedLodgingCostPerDay": 70,
      "estimatedFlightCostPerPerson": 400,
      "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      "alt": "overview of city buildings with a clear sky"
    });
    expect(destinations.findDestination(2)).to.deep.equal({
      "id": 2,
      "destination": "Stockholm, Sweden",
      "estimatedLodgingCostPerDay": 100,
      "estimatedFlightCostPerPerson": 780,
      "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "alt": "city with boats on the water during the day time"
    });
  })

  it('should have an ID for each destination', () => {

  });

  it('should have a city for each destination', () => {

  });

  it('should have an estimated cost for lodging for each destination', () => {

  });

  it('should have an estimated cost per person for flights for each destination', () => {

  });

  it('should have an image for each destination', () => {

  });

  it('should have alt text for each destination', () => {

  });

}); //END TEST
